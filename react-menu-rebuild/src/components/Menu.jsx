import Foodcard from "./FoodCard"
const Menu = ({foods}) => {
  // console.log(foods)
  return (
    <div >
      <h1 >Menu</h1>
      <div >
      <Foodcard foods={foods}/>
      </div>
    </div>
  )
}

export default Menu
