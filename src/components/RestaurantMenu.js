import  { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import {RES_ITEMS_URL,RES_ITEM_URL_LAST} from "../utils/constants"

const RestaurantMenu = () => {
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    
     useEffect(()=>{
        fetchMenu();
     },[]);
    const fetchMenu=async()=>{ 
        const data=await fetch(RES_ITEMS_URL+resId+RES_ITEM_URL_LAST);
        const json=await data.json();
        
        
        setResInfo(json.data);
       
        
    }
    if(resInfo===null)return<Shimmer/>
   
    const {name,cuisines,city,costForTwoMessage,locality}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    console.log(itemCards[0]);
    
  return (
    
    <div className="menu">
        <h1>{name}</h1>
        <p>
            {cuisines.join(',')}
        </p>
       
         
         <h2>Menu</h2>
         <ul>
            {itemCards.map((item)=><li key={item.card.info.id}> {item.card.info.name}- ₹ {item.card.info.defaultPrice/100}</li>)}
          
         </ul>
    </div>
  )
}

export default RestaurantMenu