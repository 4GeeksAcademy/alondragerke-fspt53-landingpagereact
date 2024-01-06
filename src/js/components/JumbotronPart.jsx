import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '/workspaces/alondragerke-fspt53-landingpagereact/src/img/perros-mar.jpg';


function JumbotronPart() {
  return (
      <Container className='shadow' 
        style={{
          backgroundImage: `url(${image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '750px', 
          width: '100%',   
          padding: '50px',
          marginTop: '30px',
          marginBottom: '20px', // Espaciado inferior personalizado
          borderRadius: '10px', 
        }}
      >
        <h1 style={{ fontFamily: 'Lemon',  textAlign: 'left', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'  }}>A warm welcome to Pawradise!</h1>
        <p style={{ textAlign: 'left' , paddingRight: '450px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}><b>
        Discover Pawradise – where pet happiness meets exceptional care. Welcome to a world of love, attention, and unforgettable moments for your furry friends! 🐾✨
        </b></p>
        <Link to="#about">
          <Button variant="primary" className="customButton"> 
            Discover more!
          </Button>{' '}
        </Link>
      </Container>
  );
}

export default JumbotronPart;