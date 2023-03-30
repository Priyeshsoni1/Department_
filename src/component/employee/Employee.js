import axios from "axios";
import { Table,Button} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import {AiFillDelete,AiFillEdit} from "react-icons/ai"


const Employee = () => {
  const [data, setData] = useState([]);
  const handleData = () => {
    axios.get("http://localhost:3005/data").then((res) => setData(res.data));
  };

const handleDelete=(id)=>{

  console.log("delete");
  axios.delete(`http://localhost:3005/data/${id}`)
  handleData();
}


  useEffect(() => {
    handleData();
  },[]);

  return (
    <div>
     
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Nick Name</th>
          <th>Employee</th>
          <th>Department</th>
          <th>Joining Date</th>
          <th>Modify</th>
          <th>Delete</th>
        </tr>
      </thead>  
      
        {
          data.map((u)=>
          {
            return(
              
        <tbody key={u.id}>
        <tr>
          <td> {u.name}</td>
          <td>{u.age}</td>
          <td>{u.nick}</td>
          <td><input type={"checkbox"} checked={u.employee?true:false} /></td>
          <td>{u.department}</td>
          <td>{u.joining}</td>
          <td> 
        
      <NavLink to={`/edit/${u.id}`}>
           
            <AiFillEdit />
             
            </NavLink>
            </td>
          <td><AiFillDelete onClick={(e)=>{handleDelete(u.id,e)}}/></td>
          
        </tr>
        </tbody>
          
            )
          })
        }
      
      </Table>
    </div>
  )
}

export default Employee
