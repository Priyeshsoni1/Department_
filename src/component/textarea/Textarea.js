import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Textarea = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/descr").then((res)=>setData(res.data));
        console.log(data)
    },[])
  return (
    <div>
     hello
    </div>
  )
}

export default Textarea
