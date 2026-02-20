  import { useSearchParams } from "react-router-dom";
  import React, { useState } from 'react'
  import Navbar from '../components/Navbar'
  import Filters from '../components/Filters'
  import Menu from '../components/Menu'
  import { foods as foodsData, categories as categoriesData } from '../components/data'
import {CartContext} from "../context/Cartcontext";
import { useContext } from "react";
// import Cart from "../pages/Cart";
  const Homepage = () => {
    // const [selectedCategory, setSelectedCategory] = useState("all")
    const [foods, setFoods] = useState(foodsData)
    // const [searchText, setSearchText] = useState("")
    // const [currentSort, setcurrentSort] = useState("")

const { cart } = useContext(CartContext);
const { setCart } = useContext(CartContext);



    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category") || "all";
    const SearchText = searchParams.get("search") || "";
    const currentSort = searchParams.get("sort") || "default";
    // const [cart, setCart] = useState([]);

    let filteredfooddata = foods;

    //category filter
    if (selectedCategory !== "all") {
      filteredfooddata = filteredfooddata.filter((e) => {
        return e.category === selectedCategory;
      });
    }

    // search filter 
    if (SearchText !== "") {
      const query = SearchText.toLowerCase();
      filteredfooddata = filteredfooddata.filter(function (evt) {
        return evt.name.toLowerCase().includes(query);
      });
    }
    // price sort filter 
    if (currentSort === "low") {
        filteredfooddata = filteredfooddata.slice().sort(function (a, b) {
            return a.price - b.price;
        });
    }
    if (currentSort === "high") {
        filteredfooddata = filteredfooddata.slice().sort(function (a, b) {
            return b.price - a.price;
        });
    }


    return (
      <>
      
      <div>
        {/* <Navbar cart={cart} /> */}
        <Filters categories={categoriesData} />
        <Menu foods={filteredfooddata} cart={cart} setCart={setCart}  />
      </div>
      {/* <Cart/> */}
      </>
    )
  }

  export default Homepage
