import React from 'react';
//import { Link } from 'react-router-dom';
import Userimg from './ball1.jpg';
// material-ui
import { Card, CardHeader} from '@mui/material';

// project import
//import Breadcrumb from 'component/Breadcrumb';
//import { gridSpacing } from 'config.js';

// ==============================|| SAMPLE PAGE ||============================== //

const CanteensPage = () => {
  return (
    <>
    <Card style={{"backgroundColor":"#e6b3b3",height:"300px",width:"300px",float:"left",margin:'35px'}}>
      <CardHeader title='Ball Canteen'/>
      <img src={Userimg} alt="hi" style={{height:'300px',width:'300px'}}/>
    </Card> 
    <Card style={{"backgroundColor":"#e6b3b3",height:"300px",width:"300px",float:"left",margin:'35px'}}>
      <CardHeader title='Pencil Canteen'/>
      <img src={Userimg} alt="hi" style={{height:'300px',width:'300px'}}/>
    </Card>
    <Card style={{"backgroundColor":"#e6b3b3",height:"300px",width:"300px",float:"left",margin:'35px'}}>
      <CardHeader title='Hostel Canteen'/>
      <img src={Userimg} alt="hi" style={{height:'300px',width:'300px'}}/>
    </Card> 
    <Card style={{"backgroundColor":"#e6b3b3",height:"300px",width:"300px",float:"left",margin:'35px'}}>
      <CardHeader title='Aparna Canteen-1'/>
      <img src={Userimg} alt="hi" style={{height:'300px',width:'300px'}}/>
    </Card> 
    <Card style={{"backgroundColor":"#e6b3b3",height:"300px",width:"300px",float:"left",margin:'35px'}}>
      <CardHeader title='Cake Of The Day'/>
      <img src={Userimg} alt="hi" style={{height:'300px',width:'300px'}}/>
    </Card>   
    <Card style={{"backgroundColor":"#e6b3b3",height:"300px",width:"300px",float:"left",margin:'35px'}}>
      <CardHeader title='Eat & Play'/>
      <img src={Userimg} alt="hi" style={{height:'300px',width:'300px'}}/>
    </Card>      
    </>
  );
};

export default CanteensPage;