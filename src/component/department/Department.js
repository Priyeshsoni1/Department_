import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./department.css";
import { BsFillPlusSquareFill, BsCalendarDate } from "react-icons/bs";
import { Table } from "react-bootstrap";
const Department = () => {
  const [data, setData] = useState([]);
  const[dataa,setDataa]=useState([]);
  const [search, setSearch] = useState("");
  const [dValue, setDValue] = useState("");
  const [date, setDate] = useState("");
  const[de,setDe]=useState([]);


  const handleData = () => {
    axios.get("http://localhost:3005/data").then((res) => setData(res.data));
axios.get("http://localhost:3005/descr").then((res)=>setDataa(res.data));
console.log(data);
console.log(dataa);

  };
  // const handledesc = () => {
  //   let ac=(dataa.filter((item) => {
  //     return(( item.depart.toLowerCase() === dValue.toLowerCase()));
  //   }));

  //   console.log()
  
  // };
  const handleSearch = () => {
    let filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  };

  const handleDepartment = () => {
    let departFiletered = data.filter((item) => {
      return item.department == dValue && item.joining >= date;
    });

    setData(departFiletered);
  };

  useEffect(() => {

// handledesc();

    if (search.length > 1) {
      handleSearch();
    } else {
      handleData();
    }
    
  }, [search, dValue]);
  // console.log(dValue);

  return (
    <div className="department">
      <div className="container">
        <div className="departmentName">
          <span className="departName">Department Name</span>
          <span className="dropdownDepartment">
            <select
              name="cars"
              id="cars"
              onChange={(e) => setDValue(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="Manager">Manager</option>
              <option value="Hr">Hr</option>
              <option value="Developer">Developer</option>
              <option value="CEO">CEO</option>
              <option value="CTO">CTO</option>
              <option value="Software Architect">Software Architect</option>
              <option value="Intern">Intern</option>
            </select>
          </span>
        </div>
        <div className="description">
          <span className="descr">Description</span>
          <span className="descdetail">
          {dataa.filter(dataa => dataa.depart.toLowerCase()===dValue.toLowerCase()).map(item => (
        
          item.description 
        
      ))}
      
       {/* {de} */}
          </span>
        </div>
        <div className="date">
          <span className="startdate">Start Date</span>
          <input
            type="date"
            className="inputDate"
            onChange={(e) => setDate(e.target.value)}
          />
          <span className="icon">
            <BsCalendarDate />
          </span>
        </div>

        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="save" onClick={handleDepartment}>
            Save
          </button>
        </div>
        <hr />
        <div className="search">
          <button className="searchbut">Search</button>
          <input
            type="text"
            className="inpsearch"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="tableemployee">
          <NavLink to="/create">
            <BsFillPlusSquareFill />
          </NavLink>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Age</th>
                <th>Nick Name</th>
                <th>Employee</th>
              </tr>
            </thead>

            {data.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td> {item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.nick}</td>
                    <td>
                      <input
                        type={"checkbox"}
                        checked={item.employee ? true : false}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Department;
