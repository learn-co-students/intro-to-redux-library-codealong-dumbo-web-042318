import React, { Component } from 'react';
import './App.css';

class App extends Component {


  handleclick(){
    this.props.store.dispatch({
      type: 'INCREASE_COUNT'
    })
  }


  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={(event) => this.handleclick(event)}>
          Click!
        </button>
        <p>{this.props.store.getState().items.length}</p>
      </div>
    );
  }
};

export default App;
