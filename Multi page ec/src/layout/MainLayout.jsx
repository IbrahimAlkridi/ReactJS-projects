import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import HeaderNav from '../components/Header Nav/HeaderNav';
import './mainLayout.css';
import Footer from '../components/Footer/Footer.jsx';
const MainLayout = () => {
    return (
        <div className='layout'>
            <HeaderNav />

            <div className="content">

                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default MainLayout