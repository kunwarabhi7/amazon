import React from 'react'
import ProductCard from './ProductCard'

const ProductFeed = ({ products }) => (
    <div className='grid grid-cols-4 gap-5 bg-[rgb(227,230,230)] '>
      {products.map(({ category, description, id, image, price, title ,rating}) => (
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
