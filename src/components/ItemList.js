import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem} from "../utils/cartSlice"

const ItemList = ({items})=>{
    const dispatch =useDispatch()

    const handleAddItem =(item) =>{
        console.log("addHandleclick")
        // dispatch action
        dispatch(addItem(item))
    }
    //console.log(items);
    return (
        <div>
            { console.log("value: ",items)}
            {items.map((item)=>(
                <div key={item.card.info.id} className="flex justify-between text-left p-2 m-2  border-gray-300 border-b-2">
                    {/* name, price , description w-9/12 to take max width in div */}
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- ₹{item.card.info.defaultPrice/100 || item.card.info.finalPrice/100 ||item.card.info.price/100}</span>
                            
                        </div>
                        <p className="text-xs pr-[20px] ">{item.card.info.description}</p>
                    </div>

                    {/* image nd button w-2/12 take small width outof 12 / absolute place btn on top of img*/}
                    <div className="w-2/12">
                        <div className="absolute">
                            <button className="p-2  rounded-md bg-black text-white shadow-lg" onClick={()=>handleAddItem(item)}>Add+</button>
                        </div> 
                        <img src={CDN_URL + item.card.info.imageId} className=" border-2 border-gray-200 shadow-md"/>
                        
                 </div>
                </div>
            ))}
        </div>     
        
    )
};
export default ItemList;