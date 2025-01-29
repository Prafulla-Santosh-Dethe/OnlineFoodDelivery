import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategoery = ({data, showItems,setShowIndex})=>{

     //console.log("data: ",data)
    //const [showItems, setShowItems] = useState(false); 
    const handleClick = ()=>{
        console.log("clicked");
        setShowIndex();
        // toggle feature so that if showItem true it set it as false it's opposite nd if false set as true
        // setShowItems(!showItems);
    }
    return(
        <div>
            <div className='w-7/12 mx-auto bg-slate-100 my-8 shadow-lg'>
                {/* header onClick for haeder to achieve accordian collapsing */}
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='p-2 font-semibold text-lg'>{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ?<ExpandLessOutlinedIcon style={{fontSize:"35px"}}/>: <ExpandMoreOutlinedIcon style={{fontSize:"35px"}} />}</span>
                </div>
                {/* accodian body - build new compoennt for it */}
                {/* when showitems true then only ItemList will shown */}
                {showItems && <ItemList items={data.itemCards}/>}
                
            </div>
        </div>
    )
}
export default RestaurantCategoery;