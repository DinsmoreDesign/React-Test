// Require React
var React = require('react');

// Import components
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

// Main Component
var Greeter = React.createClass({
  // Define default props
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is a default message'
    };
  },
  // Set name state to props value
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  // Update state from Form component
  handleNewData: function(updates) {
    this.setState(updates);
  },
  // Fetch value & display to screen
  render: function() {
    // Create props to render in curly brackets
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

// Export component
module.exports = Greeter;
