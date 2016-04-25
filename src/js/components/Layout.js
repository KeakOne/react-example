import React from 'react';
import Footer from './Footer';

const FirstComponent = React.createClass({
    getInitialState: function() {
      return {
        message:"first message",
        color: "dodgerblue"
      }
    },
    updateColor: function(e) {
      // console.log('updateColor')
      this.setState({color:"green"})
    },
    handleChange: function(e) {
      // console.log(e.target.value)
      this.setState({message:e.target.value})
    },
    render: function() {

        return (
          <div className="first-component">
            <div>{this.state.message}</div>
            <input type="text" value={this.state.message} onChange={this.handleChange} />
            <Footer color={this.state.color} message={this.state.message} updateColor={this.updateColor} />
          </div>
        )

    }
});

export default FirstComponent;
