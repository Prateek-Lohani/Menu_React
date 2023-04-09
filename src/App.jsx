import { useState } from 'react'
import items from './data'
import Menu from './Menu';
import Title from './Title';
import Categories from './Categories';

const allCategories=['all', ...new Set(items.map((item)=>item.category))];

function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    if (category==='all'){
      setMenuItems(items);
      return;
    }
    const newItem=items.filter((item)=>item.category===category);
    setMenuItems(newItem);
  }

  return (
    <main>
    <section className='menu'>
    <Title text='our menu' />
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems} />
    </section>
    </main>
  )
}

export default App
