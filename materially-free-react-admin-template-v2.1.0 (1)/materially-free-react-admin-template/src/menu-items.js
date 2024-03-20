// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SchoolIcon from '@mui/icons-material/School';
import GridOnIcon from '@mui/icons-material/GridOn';
import GiteIcon from '@mui/icons-material/Gite';
import FoodBankIcon from '@mui/icons-material/FoodBank';


const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  SchoolIcon : SchoolIcon,
  GridOnIcon : GridOnIcon,
  GiteIcon:GiteIcon,
  FoodBankIcon:FoodBankIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Home',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/dashboard/default'
        }
      ]
    },
    {
      id: 'pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'about-page',
          title: 'About',
          type: 'item',
          url: '/about-page',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'auth',
          title: 'Colleges',
          type: 'collapse',
          icon: icons['SchoolIcon'],
          children: [
            {
              id: 'engineering-page',
              title: 'Engineering',
              type: 'item',
              url: '/engineering-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            },
            {
              id: 'diploma-page',
              title: 'Diploma',
              type: 'item',
              url: '/diploma-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            },
            {
              id: 'pharmacy-page',
              title: 'Pharmacy',
              type: 'item',
              url: '/pharmacy-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            },
            {
              id: 'degree-page',
              title: 'Degree',
              type: 'item',
              url: '/degree-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            }
          ]
        },
        {
          id: 'auth',
          title: 'Grounds',
          type: 'collapse',
          icon: icons['GridOnIcon'],
          children: [
            {
              id: 'sample-page',
              title: 'Bus grounds',
              type: 'item',
              url: '/sample-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            },
            {
              id: 'sample-page',
              title: 'Play grounds',
              type: 'item',
              url: '/sample-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            },
          ]
        },
        {
          id: 'canteens-page',
          title: 'Canteens',
          type: 'item',
          url: '/canteens-page',
          icon: icons['FoodBankIcon']
        },
        {
          id: 'auth',
          title: 'Hostels',
          type: 'collapse',
          icon: icons['GiteIcon'],
          children: [
            {
              id: 'sample-page',
              title: 'Boys hostel',
              type: 'item',
              url: '/sample-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            },
            {
              id: 'sample-page',
              title: 'Girls hostel',
              type: 'item',
              url: '/sample-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            }
          ]
        }
      ]
    },
    {
      id: 'utils',
      title: 'Utils',
      type: 'group',
      icon: icons['AccountTreeOutlinedIcon'],
      children: [
        {
          id: 'util-typography',
          title: 'Typography',
          type: 'item',
          url: '/utils/util-typography',
          icon: icons['FormatColorTextOutlinedIcon']
        },
        // {
        //   id: 'util-addData',
        //   title: 'AddData',
        //   type: 'item',
        //   url: '/utils/util-adddata',
        //   icon: icons['FormatColorTextOutlinedIcon']
        // }
      ]
    },
  ]
};
