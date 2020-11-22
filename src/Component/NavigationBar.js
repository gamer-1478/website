import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import './NavigationBar.css'
import { HashLink } from 'react-router-hash-link';

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
                            <HashLink smooth='true' to='/#home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                        </HashLink>
                        </li >
                        <li className='nav-item'>
                            <HashLink smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }} to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                        </HashLink>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                                About me
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/github-repos' className='nav-links' onClick={closeMobileMenu}>
                                Github Repositories
                        </Link>
                        </li>
                        <li>
                            <Link to='/contact-me' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contant me
                        </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' path='/contact-me'>Contact Me</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;
