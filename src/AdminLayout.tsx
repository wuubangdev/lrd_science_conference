import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout: React.FC = () => {
    return (
        <div>
            AdminLayout
            <Outlet />
        </div>
    )
}

export default AdminLayout
