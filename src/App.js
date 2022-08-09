import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const allCategories =[...new Set(items.map((item)=>item.category))] 
  console.log(allCategories)

  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState(allCategories);


  const filterItems = (categ) => {
    const newItems = items.filter((item)=>
      item.category === categ)
    setMenuItems(newItems)
  } 

  return (
     <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} filterItems={filterItems}/>
        <Menu menuItems={menuItems} />
      </section>
     </main>
  )
}

export default App;
