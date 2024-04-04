import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemTeamComponent(props) {

    const { team } = props;
    return (
        <div style={{ width: '18rem' }} className="itemcard">
            <Card.Img variant="top" src={team.image} />
            <Card.Body className='item-body'>
                <Card.Title className='title'>{team.name}</Card.Title>
                <Card.Title className='title'>{team.last_name}</Card.Title>
                <Card.Text className='mail'>{team.mail}</Card.Text>
                <Card.Text className='subtitle' style={{ color: '#ef7f4d' }}>{team.position}</Card.Text>
            </Card.Body>
        </div>
    )
}

export default ItemTeamComponent;