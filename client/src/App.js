import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
    this.getList();
  }

  render(){
    return (
      <div className="App">
        {this.renderList()}
      </div>
    );
  }

  renderList = ()=>{
    return this.state.list.map((l, i)=>{
      return <div key={i}>{l + ' ' + i}</div>
    })
  }
  
  getList = ()=>{
    var data = {number: 36472867}

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
      .then(response => {console.log(response); this.setState({list:response.list})})
  }
}
export default App;
