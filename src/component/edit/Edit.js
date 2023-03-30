import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Edit = () => {
  const [data, setData] = useState([]);

  let nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/data/${id}`)
      .then((res) => setData(res.data));

    
  }, []);
console.log(data.name)
  const [ename, setEname] = useState();
  console.log(ename)
  const [eage, setEage] = useState(data.age);
  const [nick, setNick] = useState(data.nick);
  const [empl, setEmpl] = useState(data.employee);
  const [joining, setJoining] = useState(data.joining);
  const [depart, setDepart] = useState(data.department);

  const handleSave = () => {
    axios.put(`http://localhost:3005/data/${id}`, {
      name: ename,
      age: eage,
      nick: nick,
      employee: empl,
      joining,
      department: depart,
    });
  };

  const { id } = useParams();




  const handleEmpl = () => {
    setEmpl(!empl);
  };


  return (
    <div>
      <>
        <Form.Group className="mb-3">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            value={ename}
            onChange={(e) => {
              setEname(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee Age</Form.Label>
          <Form.Control
            placeholder="Employee Name"
            type="number"
            value={eage}
            onChange={(e) => {
              setEage(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee NickName</Form.Label>
          <Form.Control
            placeholder="Employee NickName"
            value={nick}
            onChange={(e) => {
              setNick(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee Joining Date</Form.Label>
          <Form.Control
            placeholder="Employee Joining Date"
            type="date"
            value={joining}
            onChange={(e) => {
              setJoining(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee Department</Form.Label>

          <Form.Select
            onChange={(e) => {
              setDepart(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="Manager">Manager</option>
            <option value="Hr">Hr</option>
            <option value="Developer">Developer</option>
            <option value="CEO">CEO</option>
            <option value="CTO">CTO</option>
            <option value="Software Architect">Software Architect</option>
            <option value="Intern">Intern</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Are you Employee"
            value={empl}
            // onChange={(e) => {
            //   setEmpl((e.target.value));
            // }}
            onClick={handleEmpl}
          />
        </Form.Group>
        <div
          className="but"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
          {/* <Button variant="dark" onClick={handleCancel}>
            Cancel
          </Button> */}
        </div>
      </>
    </div>
  );
};

export default Edit;
