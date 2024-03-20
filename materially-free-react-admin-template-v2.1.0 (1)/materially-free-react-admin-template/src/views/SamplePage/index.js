import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card,  CardContent,  Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// ==============================|| SAMPLE PAGE ||============================== //

const AboutPage = () => {
  return (
    <>
      <Breadcrumb title="Aditya University">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          About Page
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing} >
        <Grid item>
          <Card>
            <CardContent style={{backgroundColor:'#ecc6c6'}}>
              <Typography variant="body2">
              <ul>
                <li>Sri Nallamilli Seshareddy as a founder chairman, promoted the educational society in the name and style of Aditya Academy at Kakinada in the year 1984.</li>
                <li>Aditya Engineering College was established in the academic year 2001-02 under the aegis of Aditya Academy, Kakinada with the approval of AICTE and Affiliated to JNTU with an intake of 180 in three UG Courses in Engineering & Technology.</li>
                <li>The College is situated in an eco-friendly area of 180 acres with thick greenery at Surampalem, Gandepalli Mandal, East Godavari District, Andhra Pradesh.</li>
                <li>The College is 15 KM away from Samalkot Railway Station on Howrah-Chennai Railway line in South Central Railway and it is 35 Km away from Kakinada and Rajahmundry on ADB Road.</li>
                <li>The college proudly offers 11 UG and 10 PG programmes in engineering, MCA, MBA and MBA (Integrated) with 15 years of rich standing in the educational era.</li>
                <li>In succession and with rapid strides, the academy established a number of Junior Colleges, Degree Colleges, PG Colleges, Engineering Colleges, Pharmacy Colleges, Nursing Colleges, Teacher Training Institutions.</li>
                <li>It is approved by AICTE, recognized by Govt. of Andhra Pradesh, permanently affiliated to Jawaharlal Nehru Technological University Kakinada (JNTUK) and is accredited by National Assessment And Accreditation Council (NAAC) with ‘A++’ Grade.</li>
              </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
