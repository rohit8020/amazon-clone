import { StarIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Currency from 'react-currency-formatter';


function Product({id,title,price,description,category,image,}){
    const [rating]=useState(Math.floor(Math.random()*(5-1+1))+1)
    const [isPrime]=useState(Math.random()<0.499)
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>
        <h4>{title}</h4>
        <div className='flex'>
            {Array(rating).fill().map((_,i)=>{
               return <StarIcon key={i} className='h-5 text-yellow-500'/>
            })}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <Currency
            quantity={price*75}
            currency="INR"
            />
        </div>
        {(isPrime)?(
        <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt="" />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>):null}
        <button className='mt-auto button'>Add to Cart</button>
    </div>
  )
}

export default Product