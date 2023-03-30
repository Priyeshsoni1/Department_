import React from 'react'
import {  Route ,Routes} from 'react-router-dom';

import Department from "./component/department/Department"
import Employee from "./component/employee/Employee"
import Budget from "./component/budget/Budget"
import Home from './component/home/Home';
import NavigationBar from './NavigationBar';
import Create from "./component/create/Create";
import Edit from "./component/edit/Edit";

const App = () => {
  return (
    <div>
          <NavigationBar/>
      
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route path='/department' element={<Department/>}/>
                <Route path='/employee' element={<Employee/>}/>
                <Route path='/budget' element={<Budget/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/edit/:id' element={<Edit/>}></Route>
             </Routes>
         
    </div>
  )
}

export default App
