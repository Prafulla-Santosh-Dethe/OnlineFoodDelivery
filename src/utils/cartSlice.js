import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // take config to create slice
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //  dispatch(addItem("data here")) => add, remove etc all are action nd have there won function based on which action is dispatched that action
        // specific fun will update store states nd then into ui
        addItem:(state, action)=>{

            // vanila(older) redux  ==> don't mutate state directly  nd return mandatory below way we needed to mutate staes
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // redux-toolkit we HAVE to mutate state directly
            console.log("addItem reducer action: ",action," ",action.payload);
            // mutating (directly modifying state here)
            // here in background redux  amke immutable state with older process but developer 
            // don't need to do these things from our end n dto do this redux use ""immer"" library

            state.items.push(action.payload)          
        },
        removeItem:(state, action)=>{
            // remove 1-item from top
           state.items.pop();    
        },
        clearCart:(state,action)=>{

            // console.log("p: ",state); //get proxy obj coz redux have diff way to show it
            // console.log("Q: ",current(state)); //get data
            // state=[]
            // console.log("R: ",state) //empty array but its local state it won't modify original state with it
           
            // right way to modify real state which immer can detect nd modify draft obj
           // state.items.length=0;

            // RTK says = either mutate existing sttae or return newState
            // return [] won't work coz initial sttae we defined is object with key-value so provide it in dame format
            return {items:[]};  //correct update draft obj don't need to send state nd action as argu

        }
    }
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;