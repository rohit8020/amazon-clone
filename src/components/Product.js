import { StarIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'


function Product({id,title,price,description,category,image,}){
    const [rating,setRating]=useState(Math.floor(Math.random()*(5-1+1))+1)
  return (
    <div>
        <p>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>
        <h4>{title}</h4>
        <div className='flex'>
            {Array(rating).fill().map((_,i)=>{
               return <StarIcon key={i} className='h-5'/>
            })}
        </div>
    </div>
  )
}

export default Product