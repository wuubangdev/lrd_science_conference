import React from 'react'
import { Outlet } from 'react-router';

const ClientLayout: React.FC = () => {
    return (
        <div>
            Client Layout
            <Outlet />
        </div>
    )
}

export default ClientLayout;
