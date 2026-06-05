import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/components/Layout.scss';

export default function Layout() {
  return (
    <Box className="layout">
      <Navbar />
      <Box component="main" className="main-content">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}