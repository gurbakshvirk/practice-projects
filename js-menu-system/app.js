const foods = [
  { id: 1, name: "Paneer Tikka", category: "veg", price: 250 },
  { id: 2, name: "Chicken Curry", category: "nonveg", price: 320 },
  { id: 3, name: "Veg Biryani", category: "veg", price: 220 },
  { id: 4, name: "Chicken Biryani", category: "nonveg", price: 350 },
  { id: 5, name: "Butter Naan", category: "veg", price: 40 },
  { id: 6, name: "Butter Chicken", category: "nonveg", price: 360 },
  { id: 7, name: "Dal Makhani", category: "veg", price: 240 },
  { id: 8, name: "Palak Paneer", category: "veg", price: 260 },
  { id: 9, name: "Mutton Rogan Josh", category: "nonveg", price: 420 },
  { id: 10, name: "Veg Fried Rice", category: "veg", price: 200 },

  { id: 11, name: "Chicken Fried Rice", category: "nonveg", price: 260 },
  { id: 12, name: "Veg Manchurian", category: "fastfood", price: 230 },
  { id: 13, name: "Chicken Manchurian", category: "fastfood", price: 280 },
  { id: 14, name: "Masala Dosa", category: "veg", price: 150 },
  { id: 15, name: "Plain Dosa", category: "veg", price: 120 },
  { id: 16, name: "Idli Sambar", category: "veg", price: 110 },
  { id: 17, name: "Vada Sambar", category: "veg", price: 130 },
  { id: 18, name: "Fish Curry", category: "nonveg", price: 340 },
  { id: 19, name: "Prawn Masala", category: "nonveg", price: 380 },
  { id: 20, name: "Veg Pulao", category: "veg", price: 210 },

  { id: 21, name: "Chicken Pulao", category: "nonveg", price: 300 },
  { id: 22, name: "Rajma Chawal", category: "veg", price: 190 },
  { id: 23, name: "Chole Bhature", category: "veg", price: 220 },
  { id: 24, name: "Aloo Paratha", category: "veg", price: 140 },
  { id: 25, name: "Paneer Paratha", category: "veg", price: 170 },
  { id: 26, name: "Egg Curry", category: "egg", price: 260 },
  { id: 27, name: "Egg Fried Rice", category: "egg", price: 240 },
  { id: 28, name: "Veg Sandwich", category: "fastfood", price: 120 },
  { id: 29, name: "Chicken Sandwich", category: "fastfood", price: 160 },
  { id: 30, name: "French Fries", category: "fastfood", price: 130 },

  { id: 31, name: "Veg Burger", category: "fastfood", price: 150 },
  { id: 32, name: "Chicken Burger", category: "fastfood", price: 190 },
  { id: 33, name: "Cheese Pizza", category: "fastfood", price: 280 },
  { id: 34, name: "Chicken Pizza", category: "fastfood", price: 320 },
  { id: 35, name: "Veg Momos", category: "fastfood", price: 160 },
  { id: 36, name: "Chicken Momos", category: "fastfood", price: 200 },
  { id: 37, name: "Hakka Noodles Veg", category: "fastfood", price: 210 },
  { id: 38, name: "Hakka Noodles Chicken", category: "fastfood", price: 260 },
  { id: 39, name: "Paneer Butter Masala", category: "veg", price: 280 },
  { id: 40, name: "Chicken Tikka", category: "nonveg", price: 340 },

  { id: 41, name: "Veg Thali", category: "veg", price: 300 },
  { id: 42, name: "Non-Veg Thali", category: "nonveg", price: 380 },
  { id: 43, name: "Tomato Soup", category: "veg", price: 110 },
  { id: 44, name: "Sweet Corn Soup", category: "veg", price: 120 },
  { id: 45, name: "Chicken Soup", category: "nonveg", price: 150 },
  { id: 46, name: "Gulab Jamun", category: "dessert", price: 90 },
  { id: 47, name: "Rasgulla", category: "dessert", price: 90 },
  { id: 48, name: "Ice Cream", category: "dessert", price: 100 },
  { id: 49, name: "Brownie", category: "dessert", price: 140 },
  { id: 50, name: "Cold Coffee", category: "beverages", price: 120 }
];


function applyFilters() {

    let ffoods = foods;

    
    // Category Filter
    if (currentCategory !== "all") {
        ffoods = ffoods.filter(function (e) {
            return e.category === currentCategory;
        });
    }

    // Search Filter
    if (searchText !== "") {
        ffoods = ffoods.filter(function (evt) {
            return evt.name.toLowerCase().includes(searchText);
        });
    }

    renderFoods(ffoods);
}



let menu = document.querySelector(".menu")
function renderFoods(data) {
    if (data.length === 0) {
   menu.innerHTML = "<h1>No items found</h1>";
   return;
}

    menu.innerHTML = ""
    data.forEach(function (e) {
        const div = document.createElement("div")
        div.classList.add("card");
        const name = document.createElement("h1")
        const category = document.createElement("h2")
        const price = document.createElement("h3")
        const id = document.createElement("h4")
        name.textContent = e.name
        category.textContent = e.category
        price.textContent = e.price
        id.textContent = e.id
        div.appendChild(name)
        div.appendChild(category)
        div.appendChild(price)
        // div.appendChild(id)
        menu.appendChild(div)
    })
}
renderFoods(foods)


const categories = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Veg", value: "veg" },
    { id: 3, name: "Non-Veg", value: "nonveg" },
    { id: 4, name: "Vegan", value: "vegan" },
    { id: 5, name: "Eggitarian", value: "egg" },
    { id: 6, name: "Fast Food", value: "fastfood" },
    { id: 7, name: "Beverages", value: "beverages" },
    { id: 8, name: "Desserts", value: "dessert" }
];

// buttons logic 
const btns = document.querySelector(".buttons")
categories.map(function (e) {
    const btn = document.createElement("h2")
    btn.classList.add("btn");
    btn.textContent = `${e.name}`
    btns.appendChild(btn);
    btn.addEventListener("click", () => {
        // const selectedcat = e.value;
        // if (selectedcat === "all") {
        //     renderFoods(foods);
        // }
        // else {
        //     const filtered = foods.filter(function (evt) {
        //         return evt.category === selectedcat
        //     })

        //     renderFoods(filtered);
        // }
        currentCategory = e.value;  
    applyFilters();   
    })



})

let currentCategory = "all";
let searchText = "";

// search logic 
const search = document.querySelector(".search")
search.addEventListener("input", function(e){
    // console.log(e.currentTarget.value)
    // let ser = e.currentTarget.value.toLowerCase();


    // const searched = foods.filter(function(foods){
    //     return foods.name.toLowerCase().includes(ser)
    // })
    // renderFoods(searched)
      searchText = e.currentTarget.value.toLowerCase();
    applyFilters();
})