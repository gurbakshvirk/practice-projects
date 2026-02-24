import { createContext, useState, useEffect } from "react";


export const CartContext = createContext();
export const CartProvider = ({ children }) => {


    const [Cart, setCart] = useState(() => {
        const savedCartfromlocal = localStorage.getItem('cart');
        if (savedCartfromlocal) {
            return JSON.parse(savedCartfromlocal)
        }
        else {
            return [];
        }
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(Cart));
    }, [Cart]);
    // const savedCartfromlocal = localStorage.getItem('cart');
    // const parsedcart = JSON.parse(savedCartfromlocal)
    // console.log(parsedcart)








    const addtoCart = (item) => {
        setCart((prevCart) => {
            const normalizedItem = {
                id: item._id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            };
            const existingItem = prevCart.find(
                (cartItem) => cartItem.id === normalizedItem.id
            );
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === normalizedItem.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...normalizedItem }];
        });
    };


    // console.log(Cart)
    const increaseQty = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            })
        );
    };
    // const increaseQty = (id) => {
    //   setCart((prevCart) =>
    //     prevCart.map((item) =>
    //       item.id === id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     )
    //   );
    // };

    const decreaseQty = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };
    const clearCart = () => {
        setCart([]);
    };

    // for cart page 
    // increaseQty, decreaseQty ,clearCart 



    return (
        <CartContext.Provider value={{ addtoCart, Cart, increaseQty, decreaseQty, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
