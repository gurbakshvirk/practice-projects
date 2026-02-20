import { useNavigate, useSearchParams } from "react-router-dom";
const Filters = ({ categories, setSelectedCategory, setsort }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category") || "";
  const handleCategoryClick = (value) => {
    // If ALL → reset URL completely
    if (value === "all") {
      navigate("/menu");
      return;
    }
    // If search exists keep it, otherwise only category
    if (currentSearch) {
      navigate(`/menu?search=${currentSearch}&category=${value}`);
    } else {
      navigate(`/menu?category=${value}`);
    }
  };
  const handleSortClick = (sortType) => {
    let url = "/menu?";
    const params = [];

    if (currentSearch) params.push(`search=${currentSearch}`);
    if (currentCategory) params.push(`category=${currentCategory}`);
    if (sortType !== "default") params.push(`sort=${sortType}`);

    navigate(url + params.join("&"));
  };

  
  //   const currentCategory = searchParams.get("category") || "";
  // const handleHighclick = (value) =>{
  //  if (currentSearch) {
  //       navigate(`/menu?search=${currentSearch}&category=${value}&sort=high`);
  //     } else {
  //       navigate(`/menu?category=${value}`);
  //     }
  // }
  // const handlelowclick =(value) =>{
  //   if (currentSearch) {
  //       navigate(`/menu?search=${currentSearch}&category=${value}&sort=low`);
  //     } else {
  //       navigate(`/menu?category=${value}`);
  //     }
  // }


  return (
    <div className='maindiv'>
      <div className="cardsdiv">
        {/* filter buttons for category */}
        {categories.map((cate) => (
          <button onClick={() => handleCategoryClick(cate.value)}>
            {cate.name}
          </button>

        ))}
      </div>
      <div>
        <button onClick={() => handleSortClick("high")}>High</button>
        <button onClick={() => handleSortClick("low")}>Low</button>
        <button onClick={() => handleSortClick("default")}>Reset Sort</button>
      </div>
    </div>
  )
}
export default Filters
