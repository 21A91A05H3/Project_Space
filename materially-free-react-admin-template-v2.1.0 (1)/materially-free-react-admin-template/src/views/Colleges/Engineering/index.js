import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// ==============================|| SAMPLE PAGE ||============================== //

const EngineeringPage = () => {
  return (
    <>
      <Breadcrumb title="Engineering Page">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Engineering Page
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card style={{"backgroundColor":"#c2d6d6",height:"350px",width:"250px",float:"left",margin:'25px',backgroundColor:'lightgreen'}}>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  AEC
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2">
              <ul>
                <li><Link to='/utils/util-adddata/Cotton Bhavan'>Cotton Bhavan</Link></li>
                <li><Link to='/utils/util-adddata/KL Rao Bhavan'>KL Rao Bhavan</Link></li>
                <li><Link to='/utils/util-adddata/Ratan Tata Bhavan'>Ratan Tata Bhavan</Link></li>
                <li><Link to='/utils/util-adddata/Billgates Bhavan'>Billgates Bhavan</Link></li>          
              </ul>
              </Typography>
            </CardContent>
        </Card>
        <Card style={{"backgroundColor":"#e6b3b3",height:"350px",width:"250px",float:"left",margin:'25px',backgroundColor:'lightpink'}}>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  ACET
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2">
              <ul>
                <li><Link to='/utils/util-adddata/Vishveshwaraya Bhavan'>Vishveshwaraya Bhavan</Link></li>
                <li><Link to='/utils/util-adddata/CV Raman Bhavan'>CV Raman Bhavan</Link></li>
              </ul>
              </Typography>
            </CardContent>
        </Card>
        <Card style={{"backgroundColor":"#e6b3e6",height:"350px",width:"250px",float:"left",margin:'25px',backgroundColor:'lavender'}}>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  ACOE
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2">
              <ul>
                <li><Link to='/utils/util-adddata/Ramanujan Bhavan'>Ramanujan Bhavan</Link></li>
                <li><Link to='/utils/util-adddata/Newton Bhavan'>Newton Bhavan</Link></li>
                <li><Link to='/utils/util-adddata/James Watt Bhavan'>James Watt</Link></li>
              </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default EngineeringPage;
