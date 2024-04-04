import React from 'react';
import hero from '../../assets/hero-img-W5.png';
import HeroComponentStyles from './HeroComponent.styles';

function HeroComponent() {
    return (
        <HeroComponentStyles>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Centro de Investigaciòn Tecnològico "BRILLIANT MINDS"</h1>
                            <h2>Inovacion y Tecnologìa - Robótica y Lógica de Programación </h2>
                            <div>
                                <a href="#about" className="btn-get-started scrollto">Nosotros...</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={hero} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </HeroComponentStyles>
    );
}

export default HeroComponent;
