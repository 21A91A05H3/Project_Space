import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Editdata =()=>{
    const [name,setName]=useState('')
    const [no,setNo]=useState('')
    const {id} = useParams();//console.log(id)
    useEffect(()=>{
        axios.get('http://localhost:4444/getblockbyid/'+id)
        .then((response)=>{  //console.log(response.data);
            setFormdata(response.data.blockdata);
            console.log(response)
        }).catch((err)=>console.log(err))
    },[id]);
    const handlesubmit = (e) =>{
        e.preventDefault();// console.log(formdata)
        const formData = {  
            name:name,
            no:no
        }
        axios.put('http://localhost:4444/updateblock/'+id,formData)
        .then((result)=>{
            alert(result.data.msg)
            window.location.href='http://localhost:3000/engineering-page'
        })
    }
    return(
        <>
        <h1>Edit block Form</h1>
        <form onSubmit={handlesubmit}>
            Name 
           <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
           Room No
           <input type='text' value={no} onChange={(e)=>setNo(e.target.value)}/> <br/><br/>
            <input type="submit" value="update"/>
        </form>
        </>
    )
}
export default Editdata;
