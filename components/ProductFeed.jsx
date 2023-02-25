import React from 'react'
import ProductCard from './ProductCard'

const ProductFeed = ({ products }) => (
    <>
      {products.map(({ category, description, id, image, price, title }) => (
        <ProductCard
          key={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}
        />
      ))}
    </>
  );
export default ProductFeed
