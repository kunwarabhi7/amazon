import React from 'react'
import ProductCard from './ProductCard'

const ProductFeed = ({ products }) => (
    <div className='grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5  z-10 -mt-60 absolute  '>
      {products.slice(0,4).map(({ category, description, id, image, price, title ,rating}) => (
        <ProductCard
          key={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}
          rating={rating.rate}
        />
      ))}
      <img className='col-span-full' src='https://links.papareact.com/dyz' />
      <div className='md:col-span-2 h-full'>

      {products.slice(5,6).map(({ category, description, id, image, price, title ,rating}) => (
          <ProductCard
          key={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}
          rating={rating.rate}
          />
          ))}
          </div>
          {products.slice(6,products.length).map(({ category, description, id, image, price, title ,rating}) => (
          <ProductCard
          key={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}
          rating={rating.rate}
          />
          ))}
    </div>
  );

export default ProductFeed
