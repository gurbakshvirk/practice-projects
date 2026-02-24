import React from 'react'
import Addproduct from './Addproduct'
import Allproducts from './Allproducts'
// import React, { useContext, useState } from 'react'
// import { ProductContext } from '../context/ProductContext';
import EditProduct from './EditProduct';
import Cartpage from './Cartpage';
const Admin = () => {
  return (
    <div className='maindiv'>
      <Cartpage/>
      <h3>Admin page</h3>
      <Addproduct/>
      <Allproducts/>
      {/* <EditProduct/> */}

    </div>
  )
}

export default Admin
