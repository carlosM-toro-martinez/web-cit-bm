import React, { useEffect, useState } from 'react';
import ContactComponentStyles from './ContactComponent.styles';
import axios from 'axios';
import MessageComponent from './MessageComponent';

function ContactComponent() {
    const [data, setData] = useState();
    const [coordinates, setCoordinates] = useState();

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacts`);
                console.log(response);
                setData(response.data);
                setCoordinates(JSON.parse(response.data[0].coordinates));

            } catch (error) {
                console.log(error);
            }
        }

        fetchContact();
    }, [])


    return (
        <ContactComponentStyles>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contactanos</h2>
                        <p>Comuníquese con nosotros para comenzar</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Ubicacion:</h4>
                                    <p>{data ? data[0].ubication : 'cargando...'}</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>{data ? data[0].mail : 'cargando...'}<br />informacion@cit.com.bo</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Enlace directo chat whatsapp:</h4>
                                    <p><a href="https://wa.me/message/H63MX5VFVGQ7A1">{data ? data[0].phone_number : 'cargando...'}</a></p>
                                </div>

                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe
                                            width="400" height="300" id="gmap_canvas"
                                            src={coordinates ? `https://maps.google.com/maps?q=${coordinates.lat},%20${coordinates.long}&t=&z=17&ie=UTF8&iwloc=&output=embed` : null}

                                        >
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MessageComponent />
                    </div>
                </div>
            </section>
        </ContactComponentStyles >
    );
}

export default ContactComponent;
