import React from 'react';
import Cards from './Cards';
import JumbotronPart from './JumbotronPart';
import WalkingExecise from '/workspaces/alondragerke-fspt53-landingpagereact/src/img/perros-bosque.jpg';
import InHomeCare from '/workspaces/alondragerke-fspt53-landingpagereact/src/img/perro-casa.jpg';
import Training from '/workspaces/alondragerke-fspt53-landingpagereact/src/img/perro-training.jpg';
import SpaGrooming from '/workspaces/alondragerke-fspt53-landingpagereact/src/img/perro-spa.jpg';


function Home() {
  return (
    <div className='container'>
      <JumbotronPart />
      <div className="d-flex flex-row">
        <Cards 
          image={WalkingExecise} 
          title="Walking and exercise 🚶‍♂️" 
          description="Get your pets moving and grooving with our specialized walking exercises. Our professional pet walkers ensure that your furry friends get the exercise they need, tailored to their specific needs and energy levels." 
          href="#walking-exercise"
        />
        <Cards 
          image={InHomeCare} 
          title="In-home care 🏡" 
          description="For pets who prefer the comfort of their own home, our in-home care service provides personalized attention. Our experienced caregivers offer feeding, playtime, and companionship, creating a stress-free environment for your pets." 
          href="#in-home-care"
        />
        <Cards 
          image={Training} 
          title="Training sessions 🐾" 
          description="Unlock the full potential of your pets with our expert training sessions. Whether you're looking to teach basic commands or address specific behavioral issues, our skilled trainers use positive reinforcement techniques to build a strong bond between you and your pet." 
          href="#training"
        />
        <Cards 
          image={SpaGrooming} 
          title="Spa & grooming services 🛁" 
          description="Treat your pets to a day of pampering with our spa and grooming services. From luxurious baths to stylish haircuts, our professional groomers ensure that your pets look and feel their best. We use pet-friendly products to keep their coats shiny and healthy." 
          href="#spa-grooming"
        />
      </div>
    </div>
  );
}

export default Home;

