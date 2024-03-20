import axios from "axios";
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
// const Coursedata = require('./adddata');
import { Card } from '@mui/material'
const Typography =()=>{
const [formdata,setFormdata]=useState({
    'campus':'',
    'floor':'',
    'name':'',
    'no':'',
})
const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4444/adddata',{formdata})
    .then(()=>{
        alert("Inserted Successfully")
        window.location.href='http://localhost:3000/engineering-page'
    })
    setFormdata({
        campus:" ",
        floor: " ",
        name: " ",
        no: " "
      });
    console.log(formdata)
}
  return(
    <>
    <center>
    <Card style={{'backgroundColor':'#df9f9f',width:'50%',margin:'100px',padding:'15px'}}>
    <h1>Course Data</h1>
    <form onSubmit={handlesubmit}>
    <table>
     <tr>  
     <td> Campus</td>  
      <td> <select onChange={(e)=>{setFormdata({...formdata,campus:e.target.value})}} name="campus">
        <option>Select Bhavan</option>
        <option value={"Cotton Bhavan"}>Cotton Bhavan</option>
        <option value={"KL Rao Bhavan"}>KL Rao Bhavan</option>
        <option value={"Billgates Bhavan"}>Billgates Bhavan</option>
        <option value={"Ratan Tata Bhavan"}>Ratan Tata Bhavan</option>
        <option value={"Visveshwaraya Bhavan"}>Visveshwaraya Bhavan</option>
        <option value={"CV Raman Bhavan"}>CV Raman Bhavan</option>
        <option value={"Ramanujan Bhavan"}>Ramanujan Bhavan</option>
        <option value={"Newton Bhavan"}>Newton Bhavan</option>
        <option value={"James Watt Bhavan"}>James Watt Bhavan</option>
       </select>
       </td> 
       </tr> 
      <br />
      <tr>
      <td>Floor</td>  
      <td><select onChange={(e)=>{setFormdata({...formdata,floor:e.target.value})}} name="floor">
       <option>Select Floor</option>
       <option value={"Ground Floor"}>Ground Floor</option>
        <option value={"First Floor"}>First Floor</option>
        <option value={"Second Floor"}>Second Floor</option>
        <option value={"Third Floor"}>Third Floor</option>
        <option value={"Fourth Floor"}>Fourth Floor</option>
       </select>
       </td>
       </tr>  
       <br />
      <tr>
       <td> Name </td>
      <td><input type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})} value={formdata.name}/>
      </td>  
        
        </tr> 
        <br />
    <tr>
        Room No 
    <td>
        <input type='text' name='no' onChange={(e)=>setFormdata({...formdata,no:e.target.value})} value={formdata.no}/>
        </td>
        </tr>   
        </table>   
        <br/>
        <input type="submit" value="submit"/>
        
    </form>
    
    </Card>
    </center>
    </>
)
};
export default Typography;