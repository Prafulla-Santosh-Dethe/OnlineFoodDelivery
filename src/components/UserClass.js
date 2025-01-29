import React from "react";
// Extend React.compo[class given by React] let react know that its class based compo
// It is class which has render method that return piece of JSX called class based compo
// In React we have React.compo class using it from imported React


class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            // count:0,
            // count2:2
            userInfo:{
                name:"dummy",
                loaction:"nagar",
                avatar_url:"",
            }
        }
        //console.log("constructor")
    }

     async componentDidMount(){
        //console.log("CompoDidMount")

        // it keeps executing even after compo unmount coz interval is browsers API nd React don't know when to terminate it we manually need to do it
        // CompoWillMount:- call right before compo removed from DOM which is perfect place for completing all cleanup tasks there we clearInterval

        this.timerInterval =  setInterval(()=>{
          //  console.log("setInterval in CompoDidMount")
        },1000)

        // used to call api --> first UI render then api call is preferred way coz immediately with
        // available data user can see wenpage nd once data fetched from api UI re-render compo nd update data wherever requ.
        
        const data = await fetch("https://api.github.com/users/Prafulla-Santosh-Dethe");
        const json = await data.json();
        //console.log("data: ",json)

        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate(){
        //console.log("compoDidUpdate")
    }

    componentWillUnmount(){
        clearInterval(this.timerInterval)
        //console.log("compoWillUnmount")
    }

    
     render(){
        // const{name, location} = this.props
        // const{count,count2} = this.state
         //console.log("render")

        const{name, location,avatar_url} = this.state.userInfo
        // render method return JSX which display on UI
        // debugger;
       return(
            <div className="userCard">
                {/* <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3> */}
{/* 
                 <h1>Count={count}</h1> 
                 <h1>Count2={this.state.count2}</h1> */}

                {/* onClick btn update  */}
                {/* <button onClick={()=>{
                    // this.state.count=this.state.count+1 -->wrong way

                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+2  
                    });
                }}>Count Increase</button>
                <h1>Count: {count}</h1>
                <h1>Count: {count2}</h1> */}

                {/* after destructure */}
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @prafulla-santosh-dethe</h3>
            </div> 
       )
    }
}
export default UserClass;