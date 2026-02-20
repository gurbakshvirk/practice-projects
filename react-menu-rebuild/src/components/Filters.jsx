import { useNavigate, useSearchParams } from "react-router-dom";
const Filters = ({ categories, setSelectedCategory, setsort }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSearch = searchParams.get("search") || "";
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
    </div>
  )
}
export default Filters
