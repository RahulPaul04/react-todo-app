import React, { Component } from 'react'

export default class ConfirmBox extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          confirm:0
        };
      }


  
  
    render() {
        console.log(this.props);
    

    return (
        <div style={{ display: this.props.display }}>

            <div className='confirmbox'>
            <div className='cfmbox'>
                <div className='confirm' onClick={this.props.handleChange}>Confirm</div>
                <div className='cancel' onClick={this.props.closeconfirm}>Cancel</div>
            </div>
        </div>
      </div>
    )
  }
}
