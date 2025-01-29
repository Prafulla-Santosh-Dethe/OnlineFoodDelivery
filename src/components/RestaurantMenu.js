import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { FSSAI_IMG, MENU_API, RES_ITEM} from "../utils/constants";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useParams } from "react-router-dom";
//import TwoMpTwoTone from '@mui/icons-material/TwoMpTwoTone';


const RestaurantMenu=()=>{

   const[resInfoData, setResInfoData] = useState(null);
   const[menuList,setMenuList] = useState([])

   const[menuItems, setMenuItems] = useState([]);
   const[menuHeading, setMenuHeading]=useState("")

   const[footer, setFooter] = useState()
   const[address, setAddress]= useState()
    
    const[loading, setLoading] = useState(true)
    const[isVisible, setIsVisible] = useState(true)
    const[isItemList, setIsItemList] = useState(true)

    const { resId }= useParams();
    
    // need api to get data for menu card detail of restaurant
    useEffect(()=>{
       fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId);
        //const data = await fetch(API);
        const json = await data.json();
        setResInfoData(json.data);
        
        // menu item detail
        const listOfItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setMenuList(listOfItems);
       
        // 2nd menuList
        const card2 = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
        const card3 = Array.isArray(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.categories)
                      ? json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.categories[0]
                      : null;
        setMenuItems(card2?.itemCards?card2.itemCards:(card3?.itemCards || []));
        setMenuHeading(card2?.title?card2.title:(card3?.title || []))

        // Ending
        const endData= json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const cardLength=endData.length
        setFooter(endData[cardLength-1])
        setAddress(endData[cardLength-2])
        setLoading(false);
    }

    
    const toggleButton=()=>{
        setIsVisible(!isVisible);
        setIsItemList(!isItemList);

    }
   
    if(loading){
        <Shimmer/>
    }
    else{
        //console.log("endData: ",menuItems," ",menuHeading)
        // console.log("area completeAddress::",footer?.card?.card?.name," :",footer?.card?.card?.completeAddress)
        const{name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName } = resInfoData?.cards[2]?.card?.card?.info;
        const{minDeliveryTime, maxDeliveryTime} = resInfoData?.cards[2]?.card?.card?.info.sla;
        const{message}= resInfoData?.cards[2]?.card?.card?.info.feeDetails
        const{area, completeAddress} = footer?.card?.card;
        const{text} = address?.card?.card;
        return (
            
            <div className="mainMenu">
                <div className="menu">
                    <div >
                            <h2 className="resName">{name}</h2>
                        <div className="menuData">
                            <h3>
                                <span>{avgRating}({totalRatingsString})</span>
                                <span>&nbsp;&nbsp;&nbsp;{costForTwoMessage}</span>
                            </h3>
                    
                            <h3 style={{color:"orange"}}>{cuisines.join(", ")}</h3> 
                            <h3>Outlet:  {areaName}</h3>
                            <h3>{minDeliveryTime}-{maxDeliveryTime} mins</h3>
                            <hr/>
                            <h4 style={{color:"grey"}}>{message}</h4>
                        </div>
                    </div>
                </div>
                <div className="recommended">
                    <hr/>
                    <div className="menuHeading">
                        <h2 className="listLength">Recommended</h2>
                        <button className="toggle" onClick={toggleButton}>{isVisible?<ExpandLessOutlinedIcon style={{fontSize:"35px"}} />:<ExpandMoreOutlinedIcon style={{fontSize:"35px"}} />}</button>
                    </div>

                    {isVisible &&
                    (menuList.map((menu)=>{
                        const {id,name, defaultPrice,price, description, imageId} = menu?.card?.info;
                        const {rating} = menu?.card?.info?.ratings?.aggregatedRating;
                    
                        return(
                            <div key={id}>
                                <div className="recoContainer">
                                    <div className="dishImg">
                                        <img src={RES_ITEM+imageId} alt={name}/>
                                    </div>
                                    <div className="detail">
                                        <h2><b>{name}</b></h2>
                                        <h4>{defaultPrice?defaultPrice/100:price/100} &nbsp;rs</h4>
                                        <h5>{rating?rating+" "+"Stars":"No Ratings"}</h5>
                                    
                                        <h4>{description}</h4> 
                                    </div>
                                    
                                </div>
                               <div> <hr/></div>
                            </div>
                        )
                    }))}
                    
                </div>
                <div className="menuItem1">
                    <div className="menuHeading">
                        <h2>{menuHeading}</h2>
                        <button className="toggle" onClick={(toggleButton)}>{isItemList?<ExpandLessOutlinedIcon style={{fontSize:"35px"}} />:<ExpandMoreOutlinedIcon style={{fontSize:"35px"}} />}</button>
                    </div>
                    {isVisible && (
                       menuItems.map((item)=>{
                        const{id, name, defaultPrice, price, description, imageId} = item?.card?.info;

                        return(
                            <div key={id} >
                               <div className="itemCard1">
                                    <div className="itemImg">
                                            <img src={RES_ITEM+imageId}/>
                                        </div>
                                        <div className="detail">
                                            <h2>{name}</h2>
                                            <h3>Rs. &nbsp;{price?price/100:defaultPrice/100}</h3>
                                            <h5>{description}</h5>
                                        </div>
                               </div>
                               <div><hr/></div>
                            </div>
                        )
                       })
                    )}
                    
                </div>
                <div className="footer">
                    <div className="fassai">
                        <img alt="fssai" src={FSSAI_IMG} style={{width:"80px", Height:"5px"}}/>
                        <h3>{text[0]}</h3>
                    </div>
                    <hr/>
                    <div className="addressFooter">
                        <h4>{name}</h4>
                        <h4>(Outlet:{area})</h4>
                        <h4>{completeAddress}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default RestaurantMenu;