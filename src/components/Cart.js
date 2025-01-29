import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    
    const store = useSelector((store) => store);
    const storeItems = store.cart.items 
    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartCompo: ",cartItems)

    const dispatch = useDispatch();
    const handleClearCart =()=>{
        console.log("clear cart handle function ")
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-5 p-5" >
           <h1 className="text-xl font-bold ">Your Cart</h1>
           <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={()=>handleClearCart()}>Clear Cart</button>
          
           <div className="w-6/12 m-auto"> 
           {cartItems.length===0 && <h>Cart is empty add items to cart</h>}
             <ItemList items={cartItems}/>
           </div>
        </div>
    )
}
export default Cart;