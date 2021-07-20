import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    
    <App /> 

    
  </React.StrictMode>,
  document.getElementById('root')
);

