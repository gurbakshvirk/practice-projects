  import { useSearchParams } from "react-router-dom";
  import React, { useState } from 'react'
  import Navbar from './components/Navbar'
  import Filters from './components/Filters'
  import Menu from './components/Menu'
  import { foods as foodsData, categories as categoriesData } from './components/data'

  const App = () => {
    // const [selectedCategory, setSelectedCategory] = useState("all")
    const [foods, setFoods] = useState(foodsData)
    // const [searchText, setSearchText] = useState("")
    const [currentSort, setcurrentSort] = useState("")
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category") || "all";

    const SearchText = searchParams.get("search") || "";

    let filteredfooddata = foods;

    //category filter
    if (selectedCategory !== "all") {
      filteredfooddata = filteredfooddata.filter((e) => {
        return e.category === selectedCategory;
      });
    }

    // search filter 
    if (SearchText !== "") {
      filteredfooddata = filteredfooddata.filter(function (evt) {
        return evt.name.toLowerCase().includes(SearchText);
      });
    }

    // price sort filter 
    // if (currentSort === "low") {
    //     ffoods = ffoods.slice().sort(function (a, b) {
    //         return a.price - b.price;
    //     });
    // }

    // if (currentSort === "high") {
    //     ffoods = ffoods.slice().sort(function (a, b) {
    //         return b.price - a.price;
    //     });
    // }


    return (
      <div>
        <Navbar />
        <Filters categories={categoriesData} setsort={setcurrentSort} />
        <Menu foods={filteredfooddata} />
      </div>
    )
  }

  export default App
