import React from 'react'
import { Outlet } from 'react-router';
import Navigation from './components/client/navigation/Navigation';
import Footer from './components/client/footer/Footer';

const ClientLayout: React.FC = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ClientLayout;
