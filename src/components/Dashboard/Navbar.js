import React, {useState, useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

/*To make navbar visible, make it true here in useState()*/

function Navbar(sidebar) {
    const [menu, setMenu] = useState(false)
    const otherMenu = () => setMenu(true)
    const homeMenu = () => setMenu(false)

    useEffect(() => {
        
    }, [sidebar])
    return (
        <div className='Navbar'>
                <div className={sidebar ? 'Short-Header': 'Header'}>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick=
                        {sidebar.showSidebar} className='menu-bar'/>
                    </Link>
                    <div className='Heading'>
                        &lt; LOVE BUG /&gt;
                    </div>
                    <div className='icons'>
                        <BsIcons.BsFillBellFill style={{marginRight:"2vw", color:"#7868e6"}}/>
                        <BsIcons.BsEnvelopeOpen style={{marginRight:"2vw", color:"#7868e6"}}/>
                        <BsIcons.BsFillPersonFill style={{marginRight:"2vw", color:"#7868e6"}}/>
                    </div>
                </div>
                <div className={sidebar ? 'Short-Sub-Header': 'Sub-Header'}>
                  <div className='Sub-Header-Text'>
                    Admin Dashboard
                  </div>
                </div>
                <IconContext.Provider value={{color:'white'}}>
                  <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                      <ul className='nav-menu-items' >
                          <li className='navbar-toggle' >
                              <Link to ='#' className='menu-bars' onClick={sidebar.showSidebar}>
                                  <AiIcons.AiOutlineClose/>
                              </Link>
                          </li>
                          <li className='nav-text' onClick={homeMenu} >
                            <Link to = '/'>
                              <AiIcons.AiFillHome/>
                              <span>Home</span>
                            </Link>
                          </li>
                          {SidebarData.map((item, index) => {
                              return(
                                  <li key={index} className={item.cName} onClick={otherMenu}>
                                      <Link to ={item.path}>
                                          {item.icon}
                                          <span>{item.title}</span>
                                      </Link>
                                  </li>
                              );
                          })}
                      </ul>
                  </nav>
                </IconContext.Provider>
             </div>

    )
}

export default Navbar
