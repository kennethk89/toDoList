import React, { Component } from 'react';
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';
import ClearItem from './components/ClearItem';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      toDos: [
        {
          item: 'text my hamster',
          status: false
        }
      ]
    }
  }

  addItem = (newItem) => {
    let tempObj = {};
    tempObj.item = newItem;
    tempObj.status = false;
    this.setState({
      toDos: this.state.toDos.concat(tempObj)
    })
  }

  checkBox = (id) => {

    this.state.toDos[id].status = !this.state.toDos[id].status
    this.setState ({
      toDos: this.state.toDos
    })
  }

  clearItem = (id) => {

    let undone = this.state.toDos.filter(toDos=>toDos.status === false)
    this.setState({
      toDos: undone
    })
  }

  render() {

    return (
      <div className="App">
        <h1>To-do's to do</h1>
        <NewItem addItem={this.addItem} />
        <ClearItem clearItem = {this.clearItem} />
        <ListItems toDos={this.state.toDos}
                  checkBox = {this.checkBox} />
      </div>
    );
  }
}

export default App;
