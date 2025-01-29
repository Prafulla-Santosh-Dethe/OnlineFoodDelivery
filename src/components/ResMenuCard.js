import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { FSSAI_IMG, MENU_API, RES_ITEM} from "../utils/constants";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoery from "./RestaurantCategoery";
//import TwoMpTwoTone from '@mui/icons-material/TwoMpTwoTone';


const ResMenuCard=()=>{

//    const[resInfoData, setResInfoData] = useState(null);
//    const[menuList,setMenuList] = useState([])

//    const[menuItems, setMenuItems] = useState([]);
//    const[menuHeading, setMenuHeading]=useState("")

//    const[footer, setFooter] = useState(null)
//    const[address, setAddress]= useState(null)
    
//     const[loading, setLoading] = useState(true)
//     const[isVisible, setIsVisible] = useState(true)
//     const[isItemList, setIsItemList] = useState(true)

    const { resId }= useParams();

    const resInfoData =  useRestaurantMenu(resId);
    // to show index- match showIndex to categorey index which get click
    const [showIndex, setShowIndex] = useState(null);
    //console.log("inside ResMenuCustom: ",resInfoData)
    
    // useEffect(()=>{
    //     if(resInfoData===null) return;
    //     console.log("useEffect in cutomHook js: ",resInfoData)
       
    //      // menu item detail
    //      const listOfItems = resInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    //      console.log("checkdata: ",listOfItems);
    //      setMenuList(listOfItems);
     
    //      // 2nd menuList
    //      const card2 = resInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    //      const card3 = Array.isArray(resInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.categories)
    //                  ? resInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.categories[0]
    //                  : null;
    //      setMenuItems(card2?.itemCards?card2.itemCards:(card3?.itemCards || []));
    //      setMenuHeading(card2?.title?card2.title:(card3?.title || []))
 
    //      // Ending
    //      const endData= resInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //      const cardLength=endData.length
    //      setFooter(endData[cardLength-1])
    //      setAddress(endData[cardLength-2])
    //      setLoading(false);
    // },[resInfoData]);

    // const toggleButton=()=>{
    //     setIsVisible(!isVisible);
    //     setIsItemList(!isItemList);

    // }
   
    if(resInfoData===null){
        <Shimmer/>
        //console.log("loading true")
    }
    else{
       const {name, cuisines, costForTwoMessage} = resInfoData?.cards[2]?.card?.card?.info;
       const { itemCards } = resInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
       //console.log("itemcards: ",itemCards);

    //    filter cards with ItemCategory which specified in @type - square bracket used coz jsx don't support @ 
       const categories = resInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
       //console.log("categories: ",categories)
       return (
            
            <div className="text-center my-5">
                <h className="font-bold text-2xl">{name}</h>
                <p className="text-lg font-semibold">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                {/* accordian collapsing  */}
                {categories.map((categorey,index)=>{
                    // here we are passing showItem valu for RestaurantCtaegoery compo from its parent i.e., ResMenuCard which means RestaurantCategoery is controlled compo
                    return(
                        <RestaurantCategoery
                         key={categorey?.card?.card?.title} 
                         data={categorey?.card?.card}
                        //  if index 0 that only true to show items others are false
                         showItems={index===showIndex ? true : false}
                        
                          /* 1st clcik cat-index-0
                              showIndex-null(initial value) index=0(clcik cat-index-0)
                              from RestaurantCategory when click handleClick call setShowIndex() method
                              - here index(0) & showIndex(null/initial) which means not equal so setShowIndex(index==0)
                              -React re-render compo nd now showIndex is 0 so when categories map nd for index-0 showItem(index-0 == showIndex==0 ==>true)
                              -so show items become true then it expand that index-0 categorey */

                              /*2nd click on index-0
                              -showIndex-0, index -0
                              -clcik Restcategorey call setShowIndex
                              -setShowIndex(index(0)==showIndex(0) ===> null(both equal then null))
                              setShowIndex(null
                              -React re-render now showIndex is set to null)
                              when categories map for every categories it chcek index is equal to show index but showiNdex null so no match 
                              -no match showItems false-- ctargories coolapse */
                            //   above 2nd click is toggle when we double click it set back showIndex to null as both indexes matches nd then showItems become false nd collapse categorie
                            
                         setShowIndex={()=>setShowIndex(index===showIndex ? null : index)}/>
                    )  
                })}
            </div>
        )
    }                     
}
export default ResMenuCard;