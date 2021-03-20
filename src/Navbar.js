import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

/*To make navbar visible, make it true here in useState()*/

function Navbar() {
    const [sidebar, setSidebar] = useState(true) 
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className='Navbar'>
                
             </div>

    )
}

export default Navbar
