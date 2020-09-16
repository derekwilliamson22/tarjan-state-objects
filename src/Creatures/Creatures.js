import React, { Component } from 'react';

class Creatures extends Component {

    state = {
        newCreatureName: '',
        creatures: [
        'Unicorn',
        'Sphinx',
        'Kappa',
        'Dryad',
        'Jackalope'
        ]
    };

    onChangeCreatureName = (event) => {
        let newCreatureName = event.target.value;
        this.setState({
            newCreatureName: newCreatureName
        });
    }

    onAddCreature = () => {
        console.log('new creature is:', this.state.newCreatureName);

        this.setState({
            newCreatureName: '',
            creatures: [
            ...this.state.creatures, 
            this.state.newCreatureName
            ]
        });
    }

    render() {
     // let creatureListItems = [ ];
     // for (let creature of this.state.creatures) {
     //   creatureListItems.push(
     //      <li>{creature}</li>
     //   );
     // }
     //let creatureListItems = [ ];
     // this.state.creatures.forEach(function(creature) {
      //  creatureListItems.push(
     //       <li>{creature}</li>
     //   );
    //  });

      // Using array.map()
      //let creatureListItems = this.state.creatures.map(creature =>
      //  <li>{creature}</li>);

        return (
            <div>
                <input 
                  type="text" 
                  placeholder="New Creature Name"
                  value={this.state.newCreatureName}
                  onChange={this.onChangeCreatureName}
                />
                <button onClick={this.onAddCreature}>Add Creature</button>
                <ul>
                  {this.state.creatures.map((creature, i) =>
                    <li key={i}>
                      {creature}
                    </li>
                  )}
                </ul>
            </div>
        );
    }
} // end component

export default Creatures;