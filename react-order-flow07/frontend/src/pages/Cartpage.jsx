import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';

const Cartpage = () => {

    const { addtoCart, Cart, setCart, increaseQty, decreaseQty, clearCart } = useContext(CartContext)
    // console.log(Cart)


    const total = Cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
    //   id
    // image
    // name
    // price
    // quantity
    return (
        <div>
            <div className='cartwrapper'>
                {Cart.map((e) => (
                < div className = 'Cartcard' key = { e.id } >
                        <img src={e.image} alt="" />
                        <h6 className='price'>{e.name}</h6>
                        <h6>Rs.{e.price}</h6>
                        <h6>Item Total: {e.price * e.quantity}</h6>
                        <br />
                        <div className='buttonsdiv'>
                            <button onClick={() => decreaseQty(e.id)}>-</button>
                            <h4>{e.quantity}</h4>
                            <button onClick={() => increaseQty(e.id)}>+</button>
                        </div>

                    </div >
            ))}
            </div>

            <div className='totalbuttonsdiv'>
                <h4>Cart Items total:{total}</h4>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cartpage


    