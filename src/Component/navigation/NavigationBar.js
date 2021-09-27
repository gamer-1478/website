import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';

import './NavigationBar.css'
import { HashLink, NavHashLink } from 'react-router-hash-link';

function NavigationBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Aayush Garg
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavHashLink smooth
                                to='/#home' className='nav-links' scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }} onClick={() => { closeMobileMenu() }}>
                                Home
                            </NavHashLink>
                        </li >
                        <li className='nav-item'>
                            <NavHashLink smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }}
                                to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </NavHashLink>
                        </li>
                        <li>
                            <HashLink to='/notes'
                                className='nav-links-mobile' onClick={closeMobileMenu}>
                                Blog/Notes
                            </HashLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' offset='80' path='/notes'>Blog/Notes</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;
