import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import AboutClass from "./components/AboutClass";
import ResMenuCustom from "./components/ResMenuCustom";
import ResMenuCard from "./components/ResMenuCard";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; 
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutClass = lazy(()=>import("./components/AboutClass"))
const AppLayout =()=>{
  //  console.log("AppLayout")
   
  const [userName, setUserName] =useState();
  
  //   authentication
  useEffect(()=>{
    // make api call send useName nd password
    const data={
        name:""
    };
   setUserName(data.name);
  },[])
  
  return(
    // as this is the main starting point which involves whole application 
    <Provider store={appStore}>
        {/* // with UserContext.Provider we can pass value parameter nd within that we can modify default value to new
    // here below we wrap whole compo like header nd outlet in provider ao everywhere value get updated
   
    // Outside Provider-default value */}
   <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    {/* userName */}
        <div className="App">
            {/* wrap only header in Provider so only for header value get modify
            all remaining places default value will be there coz its not warp in provider with valu  */}
            
            {/* in header - default below given */}
            {/* <UserContext.Provider value={{loggedInUser:"default"}}> */}
               <Header />
            {/* </UserContext.Provider> */}
          
           {/* <Header /> */}
           {/* <Body /> */}


           {/* oulet basically placed children in this compo based on given path we don't need to do anything
           from our end. [If "/" outlet placed Body, if "/about" outlet placed About compo, if "/contact" outlet placed contact]
           that given path element outlet placed on it's place in html nd it'll come on UI, even in HTML can't see
           Outlet given path compo is there in HTML */}
           <Outlet/>
        </div>
      </UserContext.Provider>
        
    </Provider>
    )
}

// const appRouter= createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout/>,
//         errorElement:<Error/>,
//     },
//     {
//         path:"/about",
//         element:<About/>,
//     },
//     {
//         path:"/contact",
//         element:<Contact/>
//     }
// ])

//console.log("-------------------------------------")
// now when we load any page/compo with given path it's loading that compo but
// header nd footer is not coming we want it fixed nd only between compo should load to do that we need children
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        // children so that it'll load specific compo with header nd footer
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading..</h1>}><AboutClass/></Suspense>
                // element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
                //element:<Grocery/>
            },
            {
                // for dynamic need to use :id
                path:"/restaurants/:resId",
                // element:<RestaurantMenu/>
                // custom Hook
                // element:<ResMenuCustom/>

                // video 11 data is new Oil make new compo
                element:<ResMenuCard/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)