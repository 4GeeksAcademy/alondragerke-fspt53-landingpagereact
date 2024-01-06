import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import NavbarPart from './components/NavbarPart';

function App() {
  return (
    <div>
      <NavbarPart />
      <div>
        <Home />
        {/* Otros componentes para el cuerpo de la página */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
