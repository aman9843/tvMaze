import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ShowState from './context/shows/ShowState'
import AlertsState from './context/alerts/AlertsState';


ReactDOM.render(
  <AlertsState>
  <ShowState>
    <App />
  </ShowState>
  </AlertsState>,
  document.getElementById('root')
);


