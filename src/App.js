import React, { Component } from 'react';
import Creatures from './Creatures/Creatures';
import './App.css';

class App extends Component {

  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    user: {
      name: 'Derek',
      whereILive: 'Minnesota',
      pizzaTopping: 'olives'
    },
  }

  onChangePizza = (event) => {
    let newPizzaTopping = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        pizzaTopping: newPizzaTopping
      }
    });
    
  } // end onChangePizza


  render() {
    return (
      <div className="App">
       <h1>{this.state.cohortName} Learns State with Objects</h1>
       <div>
         {this.state.salutation}! My name is {this.state.user.name}.
       </div>
       <ul>
         <li>My name is {this.state.user.name}.</li>
         <li>I live in {this.state.user.whereILive}.</li>
         <li>My favorite pizza topping is {this.state.user.pizzaTopping}.</li>
       </ul>
       <h4>Edit User Form</h4>
       <input type="text" placeholder="Favorite Pizza Topping" onChange={this.onChangePizza} />
       <h4>Mythical Creatures</h4>
       <Creatures />
      </div>
    );
  }
}

export default App;
