import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationbar.css"

function NavigationBar() {
  return (
    <nav>

     <NavLink to="/department"> <button className="navBut">Department</button></NavLink>
      <NavLink to="/employee">
          <button className="navBut">Employee</button>
      </NavLink>
    
    </nav>
  );
}

export default NavigationBar;