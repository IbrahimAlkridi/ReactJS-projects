import React from 'react'
import './mainLayout.css';
import { NavLink, Outlet } from 'react-router-dom';
import HeaderNav from '../components/Header Nav/HeaderNav';

const MainLayout = () => {
    return (
        <div className='layout'>
            <HeaderNav />

            <div className='content'>
                <Outlet />
            </div>

        </div>
    )
}

export default MainLayout