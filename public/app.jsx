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
    // Create Var Name
    var name = this.refs.name.value;
    // If length is greater than 0, replace value with nothing and update prop of onNewName
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
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
      name: this.props.name
    };
  },
  // Update state from Form component
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  // Fetch value & display to screen
  render: function() {
    // Create props to render in curly brackets
    var name = this.state.name;
    var message = this.props.message

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
