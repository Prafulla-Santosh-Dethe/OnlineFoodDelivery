import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    console.log("About")
    return(
        <div>
            <h1>Inside About page</h1>
            {/* <User name={"Prafulla Dethe"} location={"Pune"}/> */}

            {/* class based compo */}
            <UserClass name={"Prafulla Dethe"} location={"Pune, Maharashtra"}/>
        </div>
    )
}
export default About;