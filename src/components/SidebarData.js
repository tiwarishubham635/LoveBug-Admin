import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    /*{
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },*/
    {
        title: 'New Contest',
        path: '/NewContest',
        icon: <GiIcons.GiTrophy/>,
        cName: 'nav-text'
    },
    {
        title: 'Running Contests',
        path: '/User',
        icon: <FaIcons.FaLaptopCode/>,
        cName: 'nav-text'
    },
    {
        title: 'Help and Support',
        path: '/Contact',
        icon: <BiIcons.BiSupport/>,
        cName: 'nav-text'
    },
]