import React from 'react'

const ProductCard = ({category,description,id,image,price,title}) => {
  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

export default ProductCard
