import React, { lazy } from 'react';
// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import EngineeringPage from 'views/Colleges/Engineering';
import PharmacyPage from 'views/Colleges/Pharmacy';
import DiplomaPage from 'views/Colleges/Diploma';
import DegreePage from '../views/Colleges/Degree';
import Editdata from '../views/Utils/Editdata';
import CanteensPage from 'views/Canteens';
import BusgroundPage from 'views/Grounds/Busgrounds';
// import GroundPage from 'views/Ground';

// import BoyshostelPage from 'views/Boyshostel';
// import GirlshostelPage from 'views/Girlshostel';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));
const UtilsAdddata = Loadable(lazy(() => import('../views/Utils/Adddata')));
const UtilsEditdata = Loadable(lazy(() => import('../views/Utils/Editdata')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));



// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/utils/util-adddata/:campus?', element: <UtilsAdddata /> },
    { path: '/utils/util-editdata', element: <UtilsEditdata /> },
    { path: '/about-page', element: <SamplePage /> },
    { path: '/engineering-page', element: <EngineeringPage /> },
    { path: '/pharmacy-page', element: <PharmacyPage /> },
    { path: '/diploma-page', element: <DiplomaPage /> },
    { path: '/degree-page', element: <DegreePage /> },
    { path: '/editdata/:id', element: <Editdata/> },
    { path: '/canteens-page', element: <CanteensPage/>},
    { path: '/busground-page', element: <BusgroundPage/>}
    // { path: '/ground-page', element: <GroundPage/>}
    // { path: '/boyshostel-page', element: <BoyshostelPage /> },
    // { path: '/girlshostel-page', element: <GirlshostelPage /> },
    
  ]
};

export default MainRoutes;