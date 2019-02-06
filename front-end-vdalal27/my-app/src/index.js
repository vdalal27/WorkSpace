import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // My old styling, which I'll remove
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import TaskList from './TaskList.js';
import { Button, ButtonGroup } from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
import './btn.js';


ReactDOM.render(<TaskList />, document.getElementById('root'));

