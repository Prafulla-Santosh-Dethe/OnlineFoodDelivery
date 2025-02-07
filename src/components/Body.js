import ResCards, {withPromotedLabel} from "./ResCards";
import resObj from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body =()=>{

    // used mockData in useState Hook
    const[listOfRestaurants, setListOfRestaurants]=useState([])
    const[searchRestaurant, setSearchRestaurant] =useState([])
    const[searchText, setSerachText] = useState("");
    const ResCardPromoted = withPromotedLabel(ResCards);

    // to check ratings of restaurants
//    listOfRestaurants.forEach((r)=>{
//     console.log("1: ",r.info.totalRatingsString);
//    })

   // console.log("Body-ListOfRes: ",listOfRestaurants)
    // useEffect(callBack fun, dependency)
    // 1st page render nd then useEffect callBack will execute
    useEffect(()=>{
       // console.log("useEffect")
       fetchData();
    }, [])

    function searchBtn(){
        // console.log("serchBtn called")
        // console.log(searchText);

        // filter listOfRestaurant based on serachText
        // if used {} this barces for filter or any callback fun we need to return otherwise it don't written result 
       const filterRestaurants= listOfRestaurants.filter((res)=>(
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
       ))
      // console.log("filter: "+JSON.stringify(filterRestaurants, null,2))

    //   the below will update original list nd when we again want to filter list contain already filter data not original one that's why created new sttae to store filterRes
    //   setListOfRestaurants(filterRestaurants);

       setSearchRestaurant(filterRestaurants); 
    }
    // everything execute while rendering page only useEffect callBack execute after render
   // console.log("in body")

    const fetchData= async()=>{
        const Data = await fetch(RES_URL)

        const jsonData=await Data.json();

        //console.log("jsonData: "+jsonData);


        // Optional chaining with ? so that in nesting data if anything has undefined nd null value it handle it insted of giving error it stop there nd give undefined or null
        const data=jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       
        setListOfRestaurants(data || []);
        setSearchRestaurant(data);
    }
    // console.log("ListOfRes: "+listOfRestaurants);
    

    //As api taking time to load till then page is empty so we're showing loading if length is zero:- But not best practice 
//    if(listOfRestaurants.length===0){
//     return <h1 style={{display:"flex", justifyContent:"center"}}>Loading.....</h1>
//    }

   //latest standard follwed in industry -Shimmer UI
   //Shimmer is a temporary animation placeholder for when data from the service call takes time to get back and we don't want to block rendering the rest of the UI.
  
//    Conditional Rendering:- rendering based on condition
//    if(listOfRestaurants.length===0){
//     return <Shimmer/>
//    }

//    with ternary operator
// return listOfRestaurants.length===0?<Shimmer/>:(--)
   // const{resObj} =props.resData;

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return(
            <div>
                <h1>You're offline, Please check your internet connection</h1>
            </div>
        )
    }

    const { loggedInUser,setUserName } = useContext(UserContext);
    //console.log("log: ",loggedInUser +" : ",setUserName)

    return listOfRestaurants.length===0? (
    <Shimmer/>
    ) :(
     <div className="body">
        <div className="searchBtnContainer flex">
            <div className="searchBar p-4">
                {/* classnam e= border => tailwind css to add border around input */}
                <input 
                className="border border-solid border-black p-2" 
                type="text" 
                value={searchText}
                 placeholder="Search for restaurant and food"
                 onChange={(event)=>{
                    setSerachText(event.target.value);
                 }}></input>
                <button className="px-4 py-2 bg-green-100 m-6 rounded-lg" onClick={searchBtn}>search</button><br/>
            </div>
           
            <div className="filter px-4 py-8">

                {/* button with static restaurantList data, it filter the list but cannot change the ui based on filter logic  */}
                <button className="bg-gray-300 m-2 p-2 rounded-lg" onClick={()=>{
                    // {logic to filter restaurant based on rating}
        
                    const filterList=listOfRestaurants.filter(
                    //   with if
                        (res)=>{
                            if(res.info.avgRating>4){
                                {console.log(res.info.avgRating)}
                                return listOfRestaurants;

                            }
                        }

                        // without if
                        // (res)=>res.info.avgRating>4
                        
                    )
                    console.log("filterList: "+filterList)
                    // this way we can update the state nd it'll re-render componenets nd ui get's updated
                    setListOfRestaurants(filterList)
                    } }
                    
                >Top Rated Restaurants</button>

            </div>
            {/* userName-chnage dynmically in header whatever tiped in input using contextApi */}
            <div className="px-4 py-11">
                <label>UserName: </label>
                <input className="border border-solid border-black p-1" 
                placeholder="Enter user name"
                value={loggedInUser}
                onChange={(e)=>setUserName(e.target.value)}/>
            </div>
        </div>
         
        {/* with ListRes */}
        {/* flex=> get cards side by side byt comes in straight line "flex-warp" used to wrap it so after page finish it comes to next line  */}
        <div className="resContainer flex flex-wrap">
            {searchRestaurant.map((restaurant)=>{
                const ratingGiven = restaurant.info.totalRatingsString 
                const ratingNumber = ratingGiven.toLowerCase().includes("k") ? parseFloat(ratingGiven.replace("k","")*1000) : parseFloat(ratingGiven);
                const isPromoted = ratingNumber>50;
                return(
                <Link 
                    key={restaurant.info.id} 
                    to={"/restaurants/"+restaurant.info.id} >
                        {/* logic if totalRatingsString is greater than 50k then add label */}
                    {isPromoted ? <ResCardPromoted  resData={restaurant}/>: 
                      <ResCards resData={restaurant}/>
                    } 
                </Link>
                )
            })}
        </div>

     </div>
    )
};

export default Body;