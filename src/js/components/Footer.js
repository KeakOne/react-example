import React from "react";


export default React.createClass({

	handleClick() {
		console.log('handleClick', this)
		// parent component method
		this.props.updateColor()
	},

  render() {
  	console.log('props', this.props)
  	const style={color:this.props.color}
    return (
      <h2 style={style} onClick={this.handleClick} >{this.props.message}</h2>
    );
  }
})
