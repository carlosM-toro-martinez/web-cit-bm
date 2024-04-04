import React from 'react';
import axios from 'axios';
import LoginComponentStyles from './LoginComponent.styles';

function LoginComponent() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/messages`, formData);
            console.log('Mensaje enviado exitosamente');
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    return (
        <LoginComponentStyles>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <p>Log in</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt-5 mt-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="name">Su Nombre</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Tu Nombre" required />
                                    </div>
                                    <div className="form-group col-md-12 mt-3 mt-md-0">
                                        <label htmlFor="email">Tu Email</label>
                                        <input type="mail" className="form-control" name="mail" id="mail" placeholder="Tu Email" required />
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Tu mensaje ha sido enviado. ¡Gracias!</div>
                                </div>
                                <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </LoginComponentStyles>
    )
}

export default LoginComponent