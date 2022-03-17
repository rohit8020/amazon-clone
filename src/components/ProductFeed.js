import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
        {products.slice(0,4).map(({id,title,price,description,category,image})=>{
        return <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
        })}

        <img className='md:col-span-full' src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/Q4/Q4_Storefront_Flip/Q1_22_Post_Holiday_Flip/2022Q1_homehub_hero_1500x529.jpg" alt="" />

        <div className='md:col-span-2'>
        {products.slice(4,5).map(({id,title,price,description,category,image})=>{
        return <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
        })}
        </div>
        {products.slice(5).map(({id,title,price,description,category,image})=>{
        return <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
        })}
    </div>
    
  )
}

export default ProductFeed