import React from 'react'
import { RES_IMG_URL } from '../utils/constants'

const RestaurantCard = (props) => {
  const {resData}=props;
  const {name,avgRating,costForTwo,cloudinaryImageId,
cuisines
}=resData.info;
  return (
    <div className='m-2' >
     
         <div className='bg-gray-300 w-64 p-4 m-2 rounded-lg text-center h-[33rem]'>
        <img className="rounded-lg w-60 h-60  "src={RES_IMG_URL+cloudinaryImageId
}alt="res-img"/>
        <h2 className='p-1 font-bold text-lg'>{name}</h2>
        <h2 className='p-1 font-medium  '>{avgRating} Star </h2>
        <h2 className='p-1 font-medium  '>{costForTwo}</h2>
        <h2 className='p-1 font-medium  '>{cuisines.join(',')}</h2>
       
      <button className='bg-green-500  rounded-lg px-2 py-1 m-2'>Order Now</button>
        
      
      </div>
     
    </div>
  )
}

export default RestaurantCard