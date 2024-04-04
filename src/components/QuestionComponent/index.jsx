import React, { useEffect, useState } from 'react';
import QuestionComponentStyles from './QuestionComponent.styles';
import ItemQuestionComponent from './ItemQuestionComponent';
import axios from 'axios';

// const data = [
//     {
//         "question": "Por qué tus hijos deben aprender robótica?",
//         "answer": "El auge de las tecnologías plantea un cambio de paradigma, son parte de nuestras vidas y juegan un papel importante en nuestra sociedad. Y la robótica también es una realidad. Cada vez existen más centros donde se aprenden estos conocimientos. Combina la diversión con la introducción de conceptos tecnológicos y la programación. Abre un mundo nuevo a los niños y a las niñas. ¿Tienes dudas sobre si tus hijos deben empezar con la robótica? ¿Será útil para su futuro? Para resolver estos interrogantes, una buena alternativa es comenzar con el taller de programación y robótica virtual donde usaremos herramientas de robótica en casa. De este modo, verás de primera mano cómo aumenta su interés con los retos que propone este innovador método de aprendizaje. Y, si aún te quedan dudas, echa un vistazo a estos cinco motivos."
//     },
//     {
//         "question": "Abrirán la puerta a nuevas oportunidades laborales?",
//         "answer": "Cada vez hay más puestos de trabajo relacionados con la programación de máquinas: ingeniería, informática, cirugía robótica… Nuevas profesiones donde la función, en esencia, es 'darle instrucciones a un dispositivo'. Tú mandas y la máquina ejecuta. Para poder acceder a estos nuevos empleos solo hay un camino: aprender conocimientos de robótica desde pequeños. Si ya están absortos en el mundo de la tecnología y han trabajado con ella, sabrán si les gusta o no seguir formándose en una profesión enfocada a esta rama. En caso de que sea así, tendrán ya una buena base de conocimientos digitales. No empezarán de cero."
//     },
//     {
//         "question": "Desarrollarán habilidades necesarias para su futuro?",
//         "answer": "Trabajando y jugando con robótica ampliarán sus aptitudes. Utilizarán materiales en los que emplearán las manos y el cerebro, ¿qué implica esto? Que tus hijos desarrollarán la coordinación (mano-ojo) y la creatividad (cerebro). Estas dos habilidades tienen gran utilidad en una amplia variedad de situaciones cotidianas, aplicables al deporte, a la comunicación entre personas, etc. Además, tal y como se refleja en el estudio hecho por la Universidad de Málaga, este método de aprendizaje también tiene una influencia positiva en el interés y en la motivación, así como en la mejora de la consolidación de los aprendizajes."
//     },
//     {
//         "question": "Fomentarán el gusto por el trabajo en equipo?",
//         "answer": "Si desde pequeños se acostumbran a trabajar en equipo cuando entren en el mercado laboral tendrán más facilidad para adaptarse a los equipos. Les abrirá muchas puertas en el ámbito profesional y también en la vida diaria. Aprenderán a escuchar a los demás y a comunicarse. Empatizarán."
//     },
//     {
//         "question": "Aplicarán la robótica en su día a día",
//         "answer": "La robótica no tiene límites. Puede resolver problemas de todo tipo. Sin ir más lejos, el gran avance que ha habido en los últimos años en el mundo de la medicina es gran parte gracias a la introducción de la robótica. Nuestros hijos serán los futuros ingenieros que imaginarán esos tipos de robots, empezando ahora por tener las nociones para construir robots útiles para realizar tareas básicas. Si desde pequeños se acostumbran a trabajar en equipo cuando entren en el mercado laboral tendrán más facilidad para adaptarse a los equipos."
//     },
//     {
//         "question": "¿Qué otras oportunidades ofrece la robótica?",
//         "answer": "La robótica pedagógica ayuda también con la integración educativa de los niños y de las niñas: *Promueve la inclusión. *Favorece la interacción. *Fomenta el trabajo en equipo. *Aumenta las habilidades cognitivas y motoras. *Mejora la motricidad. *Por último, permite que cada niño 'aprenda a su ritmo'. Como puedes ver, la robótica en el entorno educativo presenta ventajas que van más allá de la formación y el aprendizaje. Los niños y niñas aprenden, se divierten y desarrollan una curiosidad que les servirá para crecer tanto profesional como personalmente. Si estás interesado en empezar a trabajar la robótica en casa puedes echar un vistazo a nuestros kits de robótica para niños."
//     }
// ]



function QuestionComponent() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/questions`);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    return (
        <QuestionComponentStyles>
            <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>F.A.Q</h2>
                        <p>Preguntas Frecuentes</p>
                    </div>

                    <ul className="faq-list" data-aos="fade-up" data-aos-delay="100">
                        {data && !error ?
                            data.map((item) => (
                                <ItemQuestionComponent question={item.question} answer={item.answer} key={item.question} />
                            )) : <p>cargando...</p>}
                    </ul>
                </div>
            </section>
        </QuestionComponentStyles>
    );
}

export default QuestionComponent;
