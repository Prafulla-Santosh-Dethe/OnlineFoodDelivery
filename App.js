// empty {} for attributes like  id class etc {id:"heading"}
// const h1 = React.createElement("h1",{id:"heading", xyz:"abc"}, "Hello world from React!");74
// console.log(h1)    //object  
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

// ========================================================================================================================================================================
// React don't have single tags it also contain nested tags
{/* <div id="parent">
    <div id="child">
            <h1>I'm h1 tag </h1>
     </div>
 </div> 
 ReactElement(object) ==> HTML(browser understand)
 */}

//  const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//        [ React.createElement("h1",{},"I'm h1 tag in nested HTML"),
//         React.createElement("h2",{}, "I'm h2 tag")
//        ]
//     )
//  );
// console.log(parent)//object
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

// ==================================================================================================================================================
// More nested html with two child div having two tags inside it
{/* <div id="parent">
    <div id="child">
            <h1>I'm h1 tag </h1>
            <h2>I'm h1 tag </h2>
     </div>

      <div id="child2">
            <h1>I'm h1 tag </h1>
            <h2>I'm h1 tag </h2>
     </div>
 </div> 
 ReactElement(object) ==> HTML(browser understand)
 */}

 const parent = React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child"},
       [ React.createElement("h1",{},"I'm h1 tag in nested HTML"),
        React.createElement("h2",{}, "I'm h2 tag")
       ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'm h1"),
            React.createElement("h2",{},"I'm h2 tag")
        ]
    )
  ]
 );
console.log(parent)//object
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);