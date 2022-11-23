import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './components/Categories';
import items from './components/data';
import './Style.css';



const allCategories =['all',... new Set(items.map(()=> items.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    console.log(filterItems)
    if(category === 'all') {
      setMenuItems(items)
      return; 
    }
  
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems);
    };

    

  



  return (
    <main>
    <section className="menu section">
     <div className="title">
       <h2>Our Menu</h2>
       
       </div>
       <Categories categories={categories} setCategories={setCategories} filterItems={filterItems}/>
       <Menu items={menuItems}/> 

</section>
  </main>
    );
  
}

export default App;
