import React from 'react';
import stk from './components/img/steak.jpg';
import brga from './components/img/burgers_masthead.jpg' 


const Menu = ({items}) => {
    return( <div className="section-center">
        {items.map((menuItem)=>{
          const {id,title,category,desc,price} = menuItem;
          return ( 
          <article key={id} className="menu-item">
            <div className='Breakfast Platter'>
              <img src={stk} height='200px'/>
           </div>
           <img src={brga} height='200px'/>
          
            

            <div className="item-info">
                  <header>
                      <h4>{title}</h4>
                      </header>
                      <h4 className="price">${price}</h4>
                      <p className="item-text">{desc}</p>
                      <p className="category">{category}</p>
              </div>
        
          </article> 
          ) 
        })}


    </div>

 );
};

export default Menu;