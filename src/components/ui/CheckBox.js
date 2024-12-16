import React, {Component} from 'react';
import ConfirmBox from './ConfirmBox';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            cfmbox: "None"
        };

       this.handleChange = this.handleChange.bind(this)
        this.closeconfirm = this.closeconfirm.bind(this)
    }

    

    handleChange(e) {
        this.setState({ checked: true,cfmbox: 'None' }); 

        this.props.onChange(true);
        console.log(this.state);
      }

    setcomfirm(e){
        console.log("calling setconfirm");
        this.setState({cfmbox:'flex'})
    }

    closeconfirm(e){
        console.log("inside closeconfirm");
        this.setState({
            checked:false,
            cfmbox:'None'
        })
        
        this.props.onChange(false);

    }

    render() {
        return (
            <div>
                <ConfirmBox display={this.state.cfmbox} handleChange={this.handleChange} closeconfirm={this.closeconfirm}/>
                <div style={{"position":"relative"}}>
                <div style={{'position':'absolute','width':'13px','height':'13px','margin':'4px','marginLeft':'-20px','zIndex':'5'}} onClick={this.setcomfirm.bind(this)}></div>
                <input type="checkbox"  checked={this.state.checked} />

                </div>

            </div>
        );
    }
}

export default CheckBox;
