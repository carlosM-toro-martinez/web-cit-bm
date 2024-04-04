import React, { useState } from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import HeroComponent from '../../components/HeroComponent'
import AboutComponent from '../../components/AboutComponent'
import ServicesComponent from '../../components/ServicesComponent'
import PortfolioComponent from '../../components/PortfolioComponent'
import QuestionComponent from '../../components/QuestionComponent'
import ContactComponent from '../../components/ContactComponent'
import TeamComponent from '../../components/TeamComponent'

function Home() {
    const [currentSectionId, setCurrentSectionId] = useState(null);
    window.addEventListener('scroll', () => {
        const headerHeight = document.getElementById('header').offsetHeight;
        const scrollPosition = window.scrollY;

        // Determinar el elemento actual basado en su posición en la página
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setCurrentSectionId(section.id);
            }
        });
    });

    return (
        <>
            <HeaderComponent idSec={currentSectionId} />
            <section id="hero" className="section">
                <HeroComponent />
            </section>
            <main id="main">
                <section id="about" className="section">
                    <AboutComponent />
                </section>
                <section id="services" className="section">
                    <ServicesComponent />
                </section>
                <section id="portfolio" className="section">
                    <PortfolioComponent />
                </section>
                <section id="team" className="section">
                    <TeamComponent />
                </section>
                <section id="questions" className="section">
                    <QuestionComponent />
                </section>
                <section id="contact" className="section">
                    <ContactComponent />
                </section>
            </main>
        </>
    )
}

export default Home