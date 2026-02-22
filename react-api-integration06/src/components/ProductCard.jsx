import React from 'react'

const ProductCard = ({ products, startEdit, deleteProduct }) => {
  // console.log(products)
  //  name: "",
  //           price: "",
  //           category: "",
  //           image: "",
  // isPopular: "",
  // isAvailable: ""
  return (
    <div className='wrapper'>
      {products.map((e) => (
        <div className='card' key={e.id}>
          <img className='img' src={e.image} alt="" />
          <h3>{e.name}</h3>
          <div className='buttonsdiv'>
            <h4>{e.price}</h4>
            <h4>{e.category}</h4>
          </div>
          <div className='buttonsdiv'>
            <button onClick={() => startEdit(e)}>Edit</button>
            <button onClick={() => deleteProduct(e.id)}>Delete</button>
          </div>
          {/* <h2>{e.isPoular}</h2>
          <h2>{e.isAvailable}</h2> */}

        </div>
      ))}
    </div>
  )
}

export default ProductCard
