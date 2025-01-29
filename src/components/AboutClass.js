import {Component} from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutClass extends Component{

    constructor(props){
        super(props)
        //console.log("Parent-constructor")
    }

    componentDidMount(){
        //console.log("parent-compoDidMount")
    }

    render(){
        //console.log("Parent-Render")
        return(
            <div className="userM">
                <h1>Inside AboutClass class compo</h1>

                {/* how to get context value in classBased Components */}
                <div>
                    LoggedInUser:
                    {/* consumer consumes or access value fron contextCreated it take fun which have that value nd then we can use it */}
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="font-semibold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"First"} location={"Pune Maharashtra"}/>

                {/* multiple class child in parent */}
                {/* If we have multiple child the sequence will be 
                       parent-constructor, parent-render
                       child1-const, child1-render
                       child2-const, child2-Rener
                       child1-compoDidMount
                       child2-compoDidMount
                       parent-compoDidMount
              */}
              {/* all compoDidMount batch together then execute with child sequence
              Coz==> Mounting diving in 2 phases 
              1-Render phase == consiist of Constructor nd Render,
               2-CommitPhase== consisit updating DOM/DOM Manipulation nd CompoDidMount 
               nd its expnsive to update DOM so React batch all of them together then execute */}
                {/* <UserClass name={"Second"} location={"Jamkhed Maharashtra"}/> */}


            </div>
        )
    }
}
export default AboutClass;