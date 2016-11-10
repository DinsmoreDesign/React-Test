// Require React
var React = require('react');

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

// Export component
module.exports = GreeterForm;
