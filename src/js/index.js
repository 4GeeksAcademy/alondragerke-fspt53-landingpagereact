// Importa React y ReactDOM desde la librería 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


// Importa el componente principal de la aplicación desde './js/App'
import App from './App';

import '../styles/index.css'; // Otros estilos globales si los tienes

// Renderiza la aplicación dentro del elemento con el id 'root' en tu HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <App />
    </Router>
  </React.StrictMode>
);
