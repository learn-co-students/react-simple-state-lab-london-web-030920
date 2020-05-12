import React from 'react'
import { render } from 'enzyme'

class Cell extends React.Component{
    
    state = {
        color: this.props.value
        
    }

    stateClick = () => {
        this.setState({
            color: "#333"
        })
    }

    render(){
        return (
            <div className='cell'
            style={{backgroundColor: this.state.color}}
            onClick={this.stateClick}>
          </div>
        )
    }
}


export default Cell