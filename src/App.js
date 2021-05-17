// create your App component here
import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inSpace: []
          };
    }

    gatherNames(data) {
        let peopleInSpace = data.people.map((person) => person["name"])
        this.setState({
            inSpace: peopleInSpace
        })

    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {this.gatherNames(data)
        })
    }


    render() {

        return (
          <div className="App">
              Here are people:
              {this.state.inSpace.map((person, i) => {return <li key={i}>{person}</li>})}
          </div>
        );
      }

    }

    export default App;