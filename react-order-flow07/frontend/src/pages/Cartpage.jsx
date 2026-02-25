import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";

const Cartpage = () => {

    const navigate = useNavigate(); 
    const { addtoCart, Cart, increaseQty, decreaseQty, clearCart } = useContext(CartContext)

    const total = Cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    if (Cart.length === 0) {
        return <h2>Your Cart is Empty</h2>;
    }

    return (
        <div>
            <div className='cartwrapper'>
                {Cart.map((e) => (
                    <div className='Cartcard' key={e.id}>
                        <img src={e.image} alt="" />
                        <h6 className='price'>{e.name}</h6>
                        <h6>Rs.{e.price}</h6>
                        <h6>Item Total: {e.price * e.quantity}</h6>

                        <div className='buttonsdiv'>
                            <button onClick={() => decreaseQty(e.id)}>-</button>
                            <h4>{e.quantity}</h4>
                            <button onClick={() => increaseQty(e.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='totalbuttonsdiv'>
                <h4>Cart Items total: {total}</h4>
                <button onClick={() => navigate("/checkout")}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Cartpage