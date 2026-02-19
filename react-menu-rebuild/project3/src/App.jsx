import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Menu from './components/Menu'
import { foods as foodsData, categories as categoriesData } from './components/data'





const App = () => {
const [categories, setCategories] = useState(categoriesData)
const [selectedCategory, setSelectedCategory] = useState("all")



if(selectedCategory === "all"){
  return setFoods(foodsData)
}else{
  // return 
}

  return (
    <div>
      <Navbar/>
      <Filters 
      categories={categories}
      setFoods={setFoods}
      foodsData={foodsData}
      setSelectedCategory={setSelectedCategory}
      
      />
    <Menu foods={foods}/>
    </div>
  )
}

export default App
