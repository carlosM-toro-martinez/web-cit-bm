import React, { useEffect } from 'react';
import ItemTeamComponent from './ItemTeamComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import TeamComponentStyles from './TeamComponent.styles';

function TeamComponent() {
    const [teamList, setTeamList] = React.useState();

    useEffect(() => {
        const getTeam = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/team`);
            setTeamList(response?.data);
        }

        getTeam();
    }, []);

    return (
        <TeamComponentStyles>
            <div className='container'>
                <div className="section-title">
                    <h2>Equipo</h2>
                    <p>Conoce a nuestro  equipo de trabajo.</p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    {teamList ? teamList.map(team => (
                        <SwiperSlide>
                            <ItemTeamComponent key={team.id_team} team={team} />
                        </SwiperSlide>
                    )) : <p> Loading...</p>}
                </Swiper>

            </div>
        </TeamComponentStyles>
    )
}

export default TeamComponent;