import React, {Component} from 'react';
import ErrorDisplay from './ErrorDisplay';

import './Input.css';

class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            error:false,
            warning:false,
        }
        this.input = null;
    }

    render(){
        return <div className="input">
            <h3>Welcome to the T9 word list generator</h3>
            <p>To begin, enter below a number between 2 and 9 and press the start button to generate the list. Then the app will list every posible combination usign T9 format</p>
            <div>
                <input className="text-box" onFocus={this.handleFocus} onKeyDown={this.handleKeyDown} onChange={this.handleChange} placeholder='Input any number here'></input>
                <button className="start-button" onClick={this.handleSubmit}>Start</button>
            </div>
            {this.renderErrorDisplay()}
        </div>;
    }

    renderErrorDisplay = ()=>{
        return <ErrorDisplay error={this.state.error} warning={this.state.warning}/>
    }

    handleFocus = (e)=>{
        this.setState(()=>{
            return {
                warning: false,
                error: false
            }
        })
    }

    handleKeyDown = (e)=>{
        if(e.key === 'Enter'){
            this.handleSubmit();
        }
    }

    handleChange = (i)=>{
        this.currentValue = i.target.value
        if(/([2-9]{9,})/.test(this.currentValue)){
            this.setState(()=>{
                return {
                    warning:true,
                }
            })
        }
    }

    handleSubmit = ()=>{
        if(/([^2-9])/.test(this.currentValue)){
            this.setState(()=>{
                return {
                    error: true,
                }
            })
        }else if(/([2-9]{9,})/.test(this.currentValue)){
            this.setState(()=>{
                return {
                    warning:true,
                }
            })
            this.getList()
        }else{
            this.setState(()=>{
                return {
                    error:false,
                    warning:false
                }
            })
            this.getList()
        };
    }

    getList = ()=>{
        this.props.getList(this.currentValue);
    }

}
export default Input;