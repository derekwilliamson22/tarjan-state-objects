import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    name: 'Derek',
    whereILive: 'Minnesota',
    pizzaTopping: 'olives'
  }

  render() {
    return (
      <div className="App">
       <h1>{this.state.cohortName} Learns State with Objects</h1>
       <div>
         {this.state.salutation}! My name is {this.state.name}.
       </div>
       <div>
       <ul>
         <li>My name is {this.state.name}.</li>
         <li>I live in {this.state.whereILive}</li>
         <li>My favorite pizza topping is {this.state.pizzaTopping}</li>
       </ul>
       </div>
      </div>
    );
  }
}

export default App;
