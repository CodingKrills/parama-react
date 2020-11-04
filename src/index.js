import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// router dom
import {
  BrowserRouter as Router,
} from "react-router-dom";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
