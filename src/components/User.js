import { useEffect, useState } from "react";
// it is fun that return piece of JSX called fun based compo
// instead of props = {name(key)}
const User =(props) =>{

    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(1); 

   //  can't use async to useEffect callback it interrupts synchronous flow nd useeffect designed to return either nothing/null or cleanup function not promise
   //  useEffect(async ()=>{
   //      console.log("useEffect in User")
   //  },[])

   useEffect(()=>{
      const timerInterval = setInterval(()=>{
         console.log("useEffect setInterval")
      },1000);

      return()=>{
         console.log("1")
         clearInterval(timerInterval);
         console.log("2")
      }
   })

    // De-structure
    const{name,location} = props
    return (
       <div className="userCard">
        <h1>Count: {count}</h1>
        <h1>Count2:{count2}</h1>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h3>Contact: @prafulla-santosh-dethe</h3>
       </div>
    );
}
export default User;