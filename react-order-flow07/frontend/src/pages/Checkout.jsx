import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const { Cart, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    if (Cart.length === 0) {
        return <h2>Your Cart is Empty</h2>
    }

    const totalAmount = Cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        orderType: "pickup"
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orderPayload = {
            items: Cart.map(item => ({
                productId: item.id,
                quantity: item.quantity
            }))
        }
        console.log("Cart:", Cart)
        console.log("Order Payload:", orderPayload)

        try {
            const response = await fetch("http://localhost:5000/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderPayload)
            })

            if (response.ok) {
                clearCart()
                alert("Order Placed Successfully")
                navigate("/")
            }
        } catch (error) {
            console.error("Error placing order:", error)
            alert("Failed to place order")
        }
    }

    return (
        <div>
            <h2>Checkout</h2>

            <h3>Total: ₹{totalAmount}</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                />

                <select
                    name="orderType"
                    value={form.orderType}
                    onChange={handleChange}
                >
                    <option value="pickup">Pickup</option>
                    <option value="delivery">Delivery</option>
                </select>

                <button type="submit">Place Order</button>

            </form>
        </div>
    )
}

export default Checkout