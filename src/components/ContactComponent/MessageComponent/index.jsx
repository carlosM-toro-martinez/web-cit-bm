import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function MessageComponent() {
    const [loading, setLoading] = useState(false);
    const [isMessageSent, setMessageSent] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setLoading(true);
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/messages`, formData);
            setMessageSent(true);
            setLoading(false);
            console.log('Mensaje enviado exitosamente');
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    return (
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Su Nombre</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Tu Nombre" required />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label htmlFor="email">Tu Email</label>
                        <input type="mail" className="form-control" name="mail" id="mail" placeholder="Tu Email" required />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="subject">Asunto</label>
                    <input type="text" className="form-control" name="case" id="case" placeholder="Asunto" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="message">Mensaje</label>
                    <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>
                {isMessageSent && (
                    <div className="alert alert-success mt-3" role="alert">
                        ¡Tu mensaje ha sido enviado correctamente! ¡Gracias!
                    </div>
                )}
                <div className="text-center">
                    {loading ?
                        <Button type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Loading...</span>
                        </Button> : <button type="submit">Enviar Mensaje</button>}
                </div>
            </form>
        </div>
    );
}

export default MessageComponent;