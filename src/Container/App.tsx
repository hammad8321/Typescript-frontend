import React from 'react';
import { Header, Footer } from '../Components/Layout';
import { Home, MenuItemDetails, NotFound } from '../Pages';
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div>
     <Header/>
     <div className='pb-5'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='menuItemDetails/:menuItemId' element={<MenuItemDetails/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      

      </Routes>
     </div>
         
     <Footer/>
    </div>
  );
}

export default App;



// <-------------to move it fist time -------------->

// git init

// git add . // add all files

// git commit -m "first commit"

// git branch -M main

// git remote add origin https://github.com/hammad8321/TaskOpedia.git

// git push -u origin main

// <------------------------To move to git second time ----------------->

// git add .

// git commit -m "updated Readme"

// git push
