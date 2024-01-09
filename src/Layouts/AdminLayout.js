import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/AdminComponents/Navbar/Navbar';

function AdminLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default AdminLayout
