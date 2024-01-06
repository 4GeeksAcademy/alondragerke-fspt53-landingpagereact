import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ image, title, description, href }) {
  return (
    <Card className="mx-2 mb-5 shadow">
      <Card.Img variant="top" src={image} className="img-fluid" style={{width: '500px', height: '200px'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-justify">{description}</Card.Text>
      </Card.Body>
      <Card.Footer className='p-3 d-flex justify-content-center align-items-center'>
          <a href={href} className="text-decoration-none" rel="noopener noreferrer">
            <Button variant="primary" className="customButton">
              Learn more
            </Button>
          </a>
        </Card.Footer>
    </Card>
  );
}

export default Cards;