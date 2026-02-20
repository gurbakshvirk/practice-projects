import Foodcard from "./FoodCard"
const Menu = ({ foods, cart, setCart }) => {
  // console.log(foods)
  return (
    <div >
      <h1 >Menu</h1>
      <div >
      <Foodcard foods={foods} 
      cart={cart} setCart={setCart}
       />
      </div>
    </div>
  )
}

export default Menu
