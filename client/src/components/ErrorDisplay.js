import React, {Component} from 'react';

import './ErrorDisplay.css';

class ErrorDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="errorDisplay">{this.renderWarning()}{this.renderError()}</div>
    }

    renderWarning=()=>{
        if(this.props.warning){
            return <div className="warning">Warning: using a number above 9 digits can take a while to load.</div>
        }
    }

    renderError=()=>{
        if(this.props.error){
            return <div className="error">Error: only numbers between 2 and 9 are allowed.</div>
        }
    }

}
export default ErrorDisplay;