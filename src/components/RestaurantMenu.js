
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCaterogy from './RestaurantCaterogy';
import { useState } from 'react';

const RestaurantMenu = () => {
    
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(null);
  
    if(resInfo===null)return<Shimmer/>;
   
   
    const {name}=resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    // // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
   

 
    
  return (
    
    <div className="menu text-center">
        <h1 className='font-bold text-xl my-4'>{name}</h1>
       
       {categories.map((categorie,index)=>(< RestaurantCaterogy key={categorie?.card?.card?.categoryId} 
       data={categorie?.card?.card}
        
        showItems={showIndex===index&&true} 
        setShowIndex={()=>setShowIndex(index)
          
        }
/>))}
    </div>
  )
}

export default RestaurantMenu