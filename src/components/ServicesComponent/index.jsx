import React, { useEffect, useState } from 'react';
import ServicesComponentStyles from './ServicesComponent.styles';
import axios from 'axios';
import ItemServicesComponent from './ItemServicesComponent';


function ServicesComponent() {

    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/courses`);
                setData(response.data);
            } catch (error) {
                console.log('Error:', error);
                setError(error)
            }
        }
        fetchData();

    }, []);


    return (
        <ServicesComponentStyles>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Servicios</h2>
                        <p>Echa un vistazo a los exclusivos e innovadores talleres que ofrecemos</p>
                    </div>

                    <div className="row">
                        {data ? data.map(item => (
                            <ItemServicesComponent
                                key={item.id_courses}
                                title={item.title}
                                image={item.image}
                                text={item.text} />
                        )) : null}
                    </div>
                </div>
            </section>
        </ServicesComponentStyles>
    );
}

export default ServicesComponent;
