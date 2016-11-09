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
  // Update state and rerender components, clear form
  onButtonClick: function(e) {
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },
  // Fetch value & display to screen
  render: function() {
    var name = this.state.name;
    var message = this.props.message

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

      </div>
    );
  }
});

var firstName = 'Derek';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
