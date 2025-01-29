import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu=(resId)=>{

    const[resInfoData, setResInfoData] = useState(null);
    //console.log("useResMenu")
    // fetch data
    useEffect(()=>{
        //console.log("useResMenu useEffect")
        fetchData();
    },[])

    const fetchData = async ()=>{
        //console.log("fectData in useResMenu")
         const data = await fetch(MENU_API+resId);
         const json = await data.json();   

         setResInfoData(json.data);
         //console.log("useCustom: ",resInfoData)
    } 
   
    return resInfoData;

}
export default useRestaurantMenu;