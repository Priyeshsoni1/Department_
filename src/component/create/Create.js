import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
const Create = () => {
  const [data, setData] = useState([]);
  const [ename,setEname]=useState("");
  const [eage,setEage]=useState(0);
  const[nick,setNick]=useState("");
  const[empl,setEmpl]=useState(false);
  const[joining,setJoining]=useState("");
  const[depart,setDepart]=useState("");
  const handleData = () => {
    axios.get("http://localhost:3005/data").then((res) => setData(res.data));
  };



  const handleSave=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3005/data",{
        id:uuidv4(),
        name:ename,
        age:eage,
        nick:nick,
        employee:empl,
        joining,
        department: depart,

    }).then(res=> console.log(depart))
}
const handleCancel=()=>{
    setEage(0);
    setEname("");
    setNick("");
    setEmpl(false);
    setDepart("");

}

  useEffect(() => {
    handleData();
  }, []);
  const handleChangeName=(e)=>{
        setEname(e.target.value);
  }
  const handleChangeAge=(e)=>
  {
    setEage(e.target.value);
  }
  console.log(eage);
const handleChangeNick=(e)=>{
    setNick(e.target.value);

}
const handleEmpl=(e)=>
{
    setEmpl(e.target.value);
}

const handleDepart=(e)=>{
  setDepart(e.target.value);
  console.log("depart")
}
const handleChangeDate=(e)=>{
  setJoining(e.target.value);
}


console.log(depart);
  return (
    <div>
      <>
        <Form.Group className="mb-3">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            placeholder="Employee Name"
            value={ename}
            onChange={handleChangeName}
          />
        </Form.Group>
        <Form.Group className="mb-3"> 
          <Form.Label>Employee Age</Form.Label>
          <Form.Control placeholder="Employee Name" type="number"  value={eage}  onChange={handleChangeAge} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee NickName</Form.Label>
          <Form.Control placeholder="Employee NickName" value={nick}  onChange={handleChangeNick}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee Joining Date</Form.Label>
          <Form.Control placeholder="Employee Joining Date" type="date" value={joining}  onChange={handleChangeDate}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee Department</Form.Label>
         

          <Form.Select onChange={handleDepart} aria-label="Default select example">
      <option >Open this select menu</option>
      <option  value="Manager">Manager</option>
      <option value="Hr">Hr</option>
      <option value="Developer">Developer</option>
      <option value="CEO">CEO</option>
      <option value="CTO">CTO</option>
      <option  value="Software Architect">Software Architect</option>
      <option value="Intern">Intern</option>
    </Form.Select>
       
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Are you Employee" value={empl} onChange={handleEmpl}/>
        </Form.Group>
        <div
          className="but"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="success" onClick={handleSave}>Save</Button>
          <Button variant="dark" onClick={handleCancel}>Cancel</Button>
        </div>
      </>
    </div>
  );
};

export default Create;
