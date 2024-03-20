import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Adddata = () => {
  const [blocks, setBlocks] = useState([]);
  const {campus} = useParams();
  console.log(campus)
  if(!campus){
    console.log("no")
  }else{
    console.log("yes")
  }
  const [unifloors,setunifloor] = useState([])
  const uniqueFloors = ()=>{
    setunifloor(blocks.map(block=>{return block.floor}))
  }

  useEffect(() => {
    axios.get("http://localhost:4444/getdata/"+campus)
      .then((response) => {
        console.log(response.data);
        setBlocks(response.data);
        uniqueFloors();
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  setTimeout(()=>{
    console.log(unifloors)
  },5000)

  const Deletedata = async (id) => {
    try {
      await axios.delete("http://localhost:4444/deletedata/" + id);
      alert("Data deleted successfully");
      setBlocks(blocks.filter(block => block._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const calculateRowSpan1 = (campus) => {
    return blocks.filter(block => block.campus === campus).length;
  }
  const calculateRowSpan2 = (floor) => {
    return blocks.filter(block => block.floor === floor).length;
  }

  
  return (
    <>
      <table className="table" border={2} align="center">
        <thead>
          <tr>
            <th>Campus</th>
            <th>Floor</th>
            <th>Name</th>
            <th>Room No</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          
            <React.Fragment>
              {blocks.map((ele, i) => {
            return (
              <tr key={i}>
                {/* Render Floor only if it's the first row for that floor */}
                {i === blocks.findIndex(block => block.campus === ele.campus) && (
                  <td rowSpan={calculateRowSpan1(ele.campus)}>{ele.campus}</td>
                )}
                {i === blocks.findIndex(block => block.floor === ele.floor) && (
                  <td rowSpan={calculateRowSpan2(ele.floor)}>{ele.floor}</td>
                )}
                {/* <td>{ele.floor}</td> */}
                <td>{ele.name}</td>
                <td>{ele.no}</td>
                <td>
                  <Link to={`/editdata/${ele._id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => Deletedata(ele._id)}>Delete</button>
                </td>
              </tr>
            )})}
            </React.Fragment>
          
          
        </tbody>
      </table>
    </>
  );
};

export default Adddata;
