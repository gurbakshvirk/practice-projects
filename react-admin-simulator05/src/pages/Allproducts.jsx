import React, { useEffect, useState } from 'react'
import Productcard from '../components/productcard';
import { ProductsContext } from '../context/ProductsContext';
const Allproducts = () => {



    return (
        <div>
            <h1>All Products section</h1>
            <Productcard />
        </div>
    )
}
export default Allproducts
