import { useRouteError } from "react-router-dom";


const Error=()=>{
    const err = useRouteError();
   // console.log("error: "+JSON.stringify(err,null,2))
    return(
        <div>
            <h1>OOps!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}
export default Error;