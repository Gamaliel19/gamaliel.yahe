import React from 'react'; import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layouts';
import Home from './Pages/Home';
import AdminLayout from './Layouts/AdminLayout';
import Notificatioons from './Pages/admin/Notifications';
import Settings from './Pages/admin/Settings';
import GestionAb from './Pages/admin/GestionAb';
import Login from './Pages/login/Login';


export default function Router() {
    return (
        <BrowserRouter bg>
            <Routes>
                <Route path='/login' Component={Login}/>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={<GestionAb />} />
                    <Route path='notifications' element={<Notificatioons />} />
                    <Route path='settings' element={<Settings />} />
                </Route>

            </Routes>
        </BrowserRouter >
    )
}