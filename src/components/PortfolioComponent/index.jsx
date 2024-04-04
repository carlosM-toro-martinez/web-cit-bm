import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import PortfolioComponentStyles from './PortfolioComponent.styles';
import axios from 'axios';
import ItemPortfolioComponent from './ItemPortfolioComponent';

function PortfolioComponent() {
    const [category, setCategory] = useState();
    const [idCategory, setIdCategory] = useState(null);
    const [proyect, setProyect] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories`);
                setCategory(response.data);
            } catch (error) {
                console.log('Error:', error);
            }
        }

        fetchData()

    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = [];
                if (idCategory === null) {
                    response = await axios.get(`${process.env.REACT_APP_API_URL}/api/allprojects`);
                }
                else {
                    response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${idCategory}`);
                }
                setProyect(response.data);
            } catch (error) {
                console.log('Error:', error);
            }
        }

        fetchData()

    }, [idCategory]);

    return (
        <PortfolioComponentStyles>
            <section className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portafolio</h2>
                        <p>Mira nuestro hermoso portafolio</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12">
                            <ul id="portfolio-flters">
                                <li className={!idCategory ? 'filter-active' : ''} onClick={() => setIdCategory(null)}>Todos</li>
                                {category ? category.map(item => (
                                    <li className={idCategory === item.id_category ? 'filter-active' : ''} key={item?.id_category} onClick={() => setIdCategory(item.id_category)}>{item?.name}</li>
                                )) : <p>Cargando...</p>}
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {proyect ?
                            proyect.map((project, index) => (
                                <ItemPortfolioComponent
                                    key={index}
                                    project={project} />
                            ))
                            : <Spinner animation="grow" />}
                    </div>
                </div>
            </section>
        </PortfolioComponentStyles >
    );
}

export default PortfolioComponent;
