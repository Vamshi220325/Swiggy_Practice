import React from 'react'


import { RES_IMG_URL } from '../utils/constants';

const CartItemList = ({items}) => {
    
  
  return (
    <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className='m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between'>
                   
                       
                    <div className='w-9/12'>
                        <div>
                    <span className='py-2'> {item?.card?.info?.name}</span>
                     <span> -₹ {item?.card?.info?.price/100}</span>
                     </div>
                   
                    <p className='text-xs'>{item?.card?.info?.description}</p>
                     </div>
                     <div className='w-3/12'>
                     
                      <img alt="cart-img"className=" rounded-lg"src={RES_IMG_URL+item.card.info.imageId}/>
                    
                      </div>               
                    </div>))}
        </div>
  )
}

export default CartItemList