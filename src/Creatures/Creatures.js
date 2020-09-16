import React, { Component } from 'react';

class Creatures extends Component {

    state = {
        creatures: [
        'Unicorn',
        'Sphinx',
        'Kappa',
        'Dryad',
        'Jackalope'
        ]

    };


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
                <ul>
                {this.state.creatures.map(creature =>
                  <li>{creature}</li>
                )}
                </ul>
            </div>
        );



    }

  
} // end component

export default Creatures;