import React from 'react';


const Categories = ({ categories,filterItems, setCategories }) => {
  
  return (
  <div className="btn-container">
    <button className={`${setCategories === categories ? "filter-btn active" : 'filter-btn'}`} onClick={()=>filterItems('all')
    }>All</button>
    <button className={`${setCategories === categories ? "filter-btn active" : 'filter-btn'}`} onClick={()=>filterItems('breakfast')
    }>Breakfast</button>
    <button className='filter-btn' onClick={()=>filterItems('lunch')
    }>Lunch</button>
  </div>

  );
  }

export default Categories;