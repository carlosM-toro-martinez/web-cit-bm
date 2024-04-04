import React, { useState } from 'react';
import HeaderComponentStyles from './HeaderComponent.styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function HeaderComponent({ idSec }) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenu = (id) => {
        const element = document.getElementById(id);

        // Añadir la clase adicional al elemento
        if (element) {
            element.classList.add('active');
        }
    }

    useEffect(() => {
        handleMenu(idSec);
    }, [idSec])


    const handleClick = () => {
        window.open(process.env.REACT_APP_API_URL, '_blank');
    };

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const handleDropdownClick = (e) => {
        if (isMobileNavOpen) {
            e.preventDefault();
            e.currentTarget.nextElementSibling.classList.toggle('dropdown-active');
        }
    };

    const scrollTo = (el) => {
        const header = document.getElementById('header');
        const offset = header.offsetHeight;

        const element = document.querySelector(el);
        const elementPos = element?.offsetTop;

        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        });

        if (isMobileNavOpen) {
            setIsMobileNavOpen(false);
        }
    };

    return (
        <HeaderComponentStyles>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <div style={{ float: 'right' }}>
                            <p className="text-light"><a href="index.html"><span>Centro de Investigaciòn Tecnològico</span></a></p>
                            <h1 className="text-light"><a href="index.html"><span>   "Brilliant Minds" </span></a></h1>
                        </div>
                    </div>
                    <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
                        <ul>
                            <li><a id='ahero' className={`nav-link scrollto ${idSec === 'hero' ? 'active' : ''}`} onClick={() => scrollTo('#hero')}>Inicio</a></li>
                            <li><a id='aabout' className={`nav-link scrollto ${idSec === 'about' ? 'active' : ''}`} onClick={() => scrollTo('#about')}>Sobre nosotros</a></li>
                            <li><a id='aservices' className={`nav-link scrollto ${idSec === 'services' ? 'active' : ''}`} onClick={() => scrollTo('#services')}>Servicios</a></li>
                            <li><a id='aportfolio' className={`nav-link scrollto ${idSec === 'portfolio' ? 'active' : ''}`} onClick={() => scrollTo('#portfolio')}>Portfolio</a></li>
                            <li><a id='ateam' className={`nav-link scrollto ${idSec === 'team' ? 'active' : ''}`} onClick={() => scrollTo('#team')}>Team</a></li>
                            <li><a id='acontact' className={`nav-link scrollto ${idSec === 'contact' ? 'active' : ''}`} onClick={() => scrollTo('#contact')}>Contactos</a></li>
                            <li><a id='alogin' className="getstarted scrollto" target="_blank" rel="noopener noreferrer" onClick={handleClick}>Log in</a></li>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}></i>
                    </nav>
                </div>
            </header>
        </HeaderComponentStyles>
    );
}

export default HeaderComponent;
