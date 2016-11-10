// Require React
var React = require('react');
var ReactDOM = require('react-dom');

// Import components
var Greeter = require('./components/Greeter');

// Create variable for injection into component
var firstName = 'Derek';

// Render the DOM w/ main component
ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
