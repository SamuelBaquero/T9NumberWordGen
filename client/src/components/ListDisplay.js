import React, {Component} from 'react';

import './ListDisplay.css'

class ListDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <h4>Results</h4>
            <div className="list">
                {this.renderList()}
            </div>
        </div>
    }

    renderList = ()=>{
        return this.props.list.map((item, key)=>{
            return <div className="list-item" key={key}><a>{item}</a></div>
        })
    }
}
export default ListDisplay;