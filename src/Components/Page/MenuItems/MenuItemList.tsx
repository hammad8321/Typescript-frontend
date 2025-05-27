import React from 'react'
import { menuItemModel } from '../../../Interface';
import  {useState, useEffect} from "react"
import MenuItemCard from './MenuItemCard';

const MenuItemList = () => {
     const [menuItems, setMenuItem] = useState<menuItemModel[]>([]);
      useEffect(() => {
        fetch("https://localhost:44329/api/MenuItem")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
             setMenuItem(data.result);
          // }).catch((error) => {
          //   console.error("Error fetching menu items:", error);
          });
    
      }, [])
    

  return (
    <div className='container row '>
{menuItems.length>0 && menuItems.map((menuItem, index)=>(
  <MenuItemCard menuItem={menuItem} key ={index}/>

))}


    </div>
  )
}

export default MenuItemList