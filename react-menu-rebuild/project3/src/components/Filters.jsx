import React from 'react'

const Filters = ({ categories, setSelectedCategory }) => {
  return (
    <div>
      {/* filter buttons for category */}
      {categories.map((cate) => (
        <button onClick={() => setSelectedCategory(cate.value)}>
          {cate.name}
        </button>
      ))}
      {console.log(categories)}

    </div>
  )
}

export default Filters
