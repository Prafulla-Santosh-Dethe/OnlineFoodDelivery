import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WifiTetheringOffIcon from '@mui/icons-material/WifiTetheringOff';
import { BorderClear } from "@mui/icons-material";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Header=()=>{

    // with normal varaible react can't re-render compo nd can't keep track on state as well even iif it get updates
    //let btnName = "Login";

    // when useState is used nd we update our state react re-render that compo with new updated value of state
    // even if it's const when state change react create seperate virtual dom tree of that compo with new state values n dthat time useState value is updated on
    // so it re-render UI with that value
    const[btnName, setBtnName] = useState("Login")

    // useEffect wokring with different dependencies
    // 1) no dependency at all => useEffect called every time when compo render
    // 2) empty array dependency [] =>use Effect called only once when compo render at starting
    // 3) if added some dependency in array[btnName] => whenever btnName update useEffect gets's called
    // useEffect(()=>{
    //    console.log("use effect")
    // },[btnName])

    // useContext
    const {loggedInUser} = useContext(UserContext);
    //console.log(contextData)
    
    const onlineStatus = useOnlineStatus();

    function login(){
        btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
      //  console.log(btnName);
    }

    // whenever any state in compo updtaed it re-render so log below line but all things are on place only updated state will refresh on UI that's power of UI
    //console.log("header re-render")
    //console.log("staus: ",onlineStatus)

    // selector to read data from store
    // subcribing to store using selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log("itemhereCart: ",cartItems);
    return(
        // className="header"==> flex
     <div className="flex justify-between bg-pink-300 shadow-lg sm:bg-yellow-100 lg:bg-green-100" >
        <img className="w-44" alt="logo" 
        src={LOGO_URL}/>
       <div className="flex items-center">
            <ul className="flex p-4 m-4">
                {/* with anchor tag we can redirect to that particular compo but it's not recommended coz it refresh complete page header body everything */}
                {/* <li><a href="/">Home</a></li>  */}

                <li className="px-2">Online Status:{onlineStatus?<WifiTetheringIcon />:<WifiTetheringOffIcon />}</li>
                <li className="px-2"><Link to="/">Home</Link></li> 
                <li className="px-2"><Link to="/about">About Us</Link></li>
                <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                
                {/* cart - redux-toolkit */}
                <li className="px-2 font-bold text-lg"><Link to="/cart">Cart-{cartItems.length}(items)</Link></li>
                <li className="px-2">
                   <button className="px-1" style={{border:"none", margin:"0px", alignSelf:"center"}} onClick={login}>{btnName}</button>
                </li>
                <li className="px-2 font-semibold">{loggedInUser}</li>
            </ul>
       </div>
     </div>
    );
};

export default Header;
