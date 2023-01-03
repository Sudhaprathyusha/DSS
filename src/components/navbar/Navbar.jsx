/*Created by Sudha Prathyusha Jakkaladiki//
  Project :IGRA
  Created on : 25 th Novermber
*/

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatDSS">What is DSS</a></p>
    <p><a href="http://localhost:3001/dashboard">Students Records</a></p>
    <p><a href="#features">Research Projects</a></p>
    <p><a href="#blog">Library</a></p>
    </>
)
//Block element modifier//

const Navbar = ()  => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="dss__navbar">
            <div className="dss__navbar-links">
                <div className="dss__navbar-links_logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="dss__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="dss__navbar-sign">
                 <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="dss__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color= "#fff"  size={27} onClick={()=> setToggleMenu(false)} />
                : <RiMenu3Line color= "#fff"  size={27} onClick={()=> setToggleMenu(true)} />
                    }
                {toggleMenu && (
                    <div  className="dss__navbar-menu_container   scale-up-center">
                        <div className="dss__navbar-menu_container-links" >
                        <Menu />
                            <div className="dss__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar