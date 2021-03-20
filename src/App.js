import './App.css';
import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Navbar from './components/Dashboard/Navbar';

import About from './components/Dashboard/About'
import User from './components/Dashboard/User'
import Contact from './components/Dashboard/Contact'
import Main from './components/Dashboard/Main'
import Footer from './components/Dashboard/Footer'
import {SidebarData} from './components/Dashboard/SidebarData';
import LocationsForm from './components/Dashboard/LocationsForm';
import Success from './components/Dashboard/Success';
import ParticipantsForm from './components/Dashboard/ParticipantsForm';
import Questions from './components/Dashboard/Questions';

import './components/Dashboard/Navbar.css';
import './components/Dashboard/Main.css';
import {IconContext} from 'react-icons';


function App() {
  const [sidebar, setSidebar] = useState(true) 
  const showSidebar = () => setSidebar(!sidebar)

  const [menu, setMenu] = useState(false)
  const otherMenu = () => setMenu(true)
  const homeMenu = () => setMenu(false)
  return (
    <div className="App">
         <Router>
            <div className='Navbar'>
                <div className={sidebar ? 'Short-Header': 'Header'}>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick=
                        {showSidebar} className='menu-bar'/>
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
                              <Link to ='#' className='menu-bars' onClick={showSidebar}>
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
             <Switch className='Heading'>
                <Route exact path="/"/>
                <Route path ='/NewContest' component={About}/>
                <Route path ='/User' component={User}/>
                <Route path ='/Contact' component={Contact}/>
                <Route path ='/LocationsForm' component={LocationsForm}/>
                <Route path ='/ParticipantsForm' component={ParticipantsForm}/>
                <Route path ='/Success' component={Success}/>
                <Route path ='/Questions' component={Questions}/>

             </Switch>
             <div className={sidebar?'Short-Main':'Main'}>
                  <Main/>
             </div>
             <div className={sidebar?'Short-Footer':'Footer'}>
                <Footer/>
             </div>
          </Router>
    </div>
  );
}

export default App;
