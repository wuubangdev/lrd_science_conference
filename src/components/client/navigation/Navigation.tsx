import React from 'react'
import NavMenu from './NavMenu';

const Navigation: React.FC = () => {
    return (
        <div className='w-full my-container flex justify-between items-center py-4 border-b-[1px] border-gray-400/30'>
            {/* Logo */}
            <div className=''>
                <img src='/logo.png' alt='logo' className='h-12 object-cover' />
            </div>
            {/* Menu */}
            <div className='flex-1 flex items-center justify-end'>
                <NavMenu />
            </div>
        </div>
    )
}

export default Navigation;
