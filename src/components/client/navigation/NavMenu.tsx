import React from 'react';
import { Link } from 'react-router';

interface IMenuItem {
    id: number;
    title: string;
    link: string;
}

const listMenu: IMenuItem[] = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "ban tổ chức", link: "/organization" },
    { id: 3, title: "bài viết", link: "/paper" },
    { id: 4, title: "các mốc thời gian", link: "/time-line" },
    { id: 5, title: "tham quan", link: "/travel" },
]

const NavMenu: React.FC = () => {
    return (
        <ul className='flex'>
            {listMenu && listMenu.map((item) =>
                <li key={item.id} className='px-4 py-2 uppercase font-semibold text-lg group'>
                    <Link to={item.link} className='group-hover:text-blue-700 duration-500'>{item.title}</Link>
                </li>
            )}
        </ul>
    )
}

export default NavMenu;
