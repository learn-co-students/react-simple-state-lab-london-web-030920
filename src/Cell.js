import React, { Component } from 'react';
class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }
    changeColor = () => {    
        this.setState({
          color: this.state.color =  '#333'
        })
      }
    render() {
        return (
            <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
}
export default Cell