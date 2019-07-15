import React, {Component} from 'react';
import logo from './logo.svg';

import Input from './components/Input';
import ListDisplay from './components/ListDisplay';

import './App.css';

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      list: [],
      currentValue: 0,
    }
  }

  render(){
    return (
      <div className="App">
        <div className="header">
          <h1 className="header-text">T9 Word Generator</h1> 
        </div>
        <Input getList={this.getList}/>
        <ListDisplay list={this.state.list}/>
      </div>
    );
  }
  
  getList = (value)=>{
    var data = {number: value}

    var init = {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache:'default',
      body: JSON.stringify(data)
    }

    var request = new Request('/', init)

    fetch(request)
      .then(res => res.json())
      .catch(error => console.error(error))
      .then(response => {this.setState({list:response.list, currentValue:value})})
  }
}
export default App;
