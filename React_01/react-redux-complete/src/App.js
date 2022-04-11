import React, { Component } from 'react';
import Coders from './Coders';
import AddCoder from './AddCoder';

class App extends Component {
  state = {
    coders: [
      {name:'Rajyavardhan Singh Diwan', age:'30', contribution:'+124',ranking:'1109', id: '1' },
      {name:'Mihir Yadav',age:'27',contribution:'+118',ranking:'1376', id: '2'},
      {name:'Sonal Sharma',age:'24',contribution:'+142',ranking:'920', id: '3'},
    ]

  }
  //addCoder is function
  addCoder = (newcoder) => {
    console.log(newcoder)
    newcoder.id = Math.random();
    let coders = [...this.state.coders, newcoder];
    this.setState({
      coders: coders
    })
  }

  deleteCoder = (id) => {
    console.log(id)
    let coders = this.state.coders.filter(coder => {
      return coder.id !== id
    });
    this.setState({
      coders: coders
    })
    //
  }
 
  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome:)</p>
        <Coders coders={this.state.coders} deleteCoder={this.deleteCoder}/>
        <AddCoder addCoder={this.addCoder} />  
      </div>
    );
  }
  
}

export default App;
