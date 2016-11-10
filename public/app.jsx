// Require React
var React = require('react');
var ReactDOM = require('react-dom');

// Message Component
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

// Form Component
var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    // Prevent reload
    e.preventDefault();
    // Create Vars
    var updates =  {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    // If length is greater than 0, replace value with nothing and update prop
    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter Message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

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

// Create variable for injection into component
var firstName = 'Derek';

// Render the DOM w/ main component
ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
