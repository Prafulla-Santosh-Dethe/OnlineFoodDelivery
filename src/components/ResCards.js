import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResCards=(props)=>{
    //console.log(props.resData[0]) as props.key from parent gives data nd it's array so with 0 we get 0-index data from resData

    // props => gives entire obj for that passed data
    // props.resData =>gives only value of that resData attribute passed from parent
    // console.log(props)
    //console.log(props.resData)

    // De-Structure values of restaurant like name, cuisines, rating time etc
    const {name, cuisines, time, sla, avgRating,cloudinaryImageId} = props.resData.info
    //console.log(sla.deliveryTime)
    
    // if no sla used above below is also way to get deliveryTime
    const {deliveryTime} =props.resData.info.sla;
    //console.log("devTime: "+deliveryTime)
    //console.log("time: "+props.resData.info.sla.deliveryTime)

    const contextData = useContext(UserContext);

    return(
        <div className="m-4 p-4 w-[270px] h-[340px] bg-gray-300 hover:bg-zinc-600">
            {/* Rigid way to do */}
            {/* <img className="resImg" alt="foodimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f58a2e0f3bb68ed0798f3e36c21c7cd0"/>
            <h3>Name</h3>
            <h4 style={{display:"flex", justifyContent:"space-between"}}><span>Rating</span> <span>Time</span></h4>
            <h4>cuisines</h4> */}

            {/* Dynamic way with dynamic data */}
            {/* rounded-lg large round corner */}
            <img className="rounded-lg  w-[270px] h-[160px] " alt="foodimg" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-1" style={{fontSize:"20px", fontFamily:"cursive"}}>{name}</h3>
            <h4 style={{display:"flex", justifyContent:"space-between"}}><span>{avgRating} Stars</span> <span>{deliveryTime} minutes</span></h4>
            <h4 className="flex-wrap">{cuisines}</h4> 
            <h4>User:{contextData.loggedInUser}</h4>
        </div>
    )
};
//Higher order components 
//  input ResCrad ===> ResCardPromoted
export  const withPromotedLabel = (ResCards) => {
    return(props)=> {
        return(
            <div>
            <label className="absolute bg-black text-white m-1 p-1 rounded-lg" text-white>Promoted</label>
            <ResCards {...props}/>
           </div>
        )
    }
}
export default ResCards;