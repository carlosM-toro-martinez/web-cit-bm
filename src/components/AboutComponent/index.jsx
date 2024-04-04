import React from 'react';
import about from '../../assets/about-img-W1.png';
import AboutComponentStyles from './AboutComponent.styles';

function AboutComponent() {
    return (
        <AboutComponentStyles>
            <section id="about" className="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                            <img src={about} className="img-fluid" alt="" data-aos="zoom-in" />
                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0">
                            <h3 data-aos="fade-up">CIT Brilliant Minds "Mentes Brillantes"</h3>
                            <p data-aos="fade-up" data-aos-delay="100">
                                Somos la Primera!!! institución 100% Potosina dedicada al fomento, difusión y capacitación en robótica y programación de videojuegos a niños y jóvenes en edad escolar.
                            </p>
                            <div className="row">
                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                    <i className="bx bx-receipt"></i>
                                    <h4>Herramientas interactivas</h4>
                                    <p>Ofrecemos todas las herramientas de aprendizaje que se necesitan en nuestro programa, lo cual incluye conexión a internet de banda ancha, kit de ensamblaje y programación Lego EV3, robots programables para diferentes edades, juegos de estrategia, consolas de videojuegos, libros, cartillas y muchas sorpresas más.</p>
                                </div>
                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bx bx-cube-alt"></i>
                                    <h4>Espacios de socialización</h4>
                                    <p>Al estilo club, ofrecemos diversos ambientes de inspiración y participación para que los niños se diviertan de forma lúdica y compartan sus experiencias de aprendizaje con los demás compañeros y amigos en un espacio agradable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AboutComponentStyles>
    );
}

export default AboutComponent;
