import React from 'react'

const FoodCard = ({foods}) => {
  return (
    <div className='menu'>
      {foods.map((food)=>(
        <div key={food.id} className='card'>
        <h1>{food.name}</h1>
        <h1>Price.{food.price}</h1>
        <h1 >{food.category}</h1>
        <h1>ID {food.id}</h1>
        </div>
      ))}
    </div>
  )
}

export default FoodCard
