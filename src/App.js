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
      ],
      input: ''
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
    this.setState({
      toDos: this.state.toDos
    })
  }

  clearItem = () => {
    let undone = this.state.toDos.filter(toDos => toDos.status === false)
    this.setState({
      toDos: undone
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submitItem = () => {
    this.addItem(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-do's to do</h1>
        <NewItem addItem={this.addItem}
          submitItem={this.submitItem}
          handleChange={this.handleChange}
          input={this.state.input}
          submitItem={this.submitItem} />
        <ClearItem clearItem={this.clearItem} />
        <ListItems toDos={this.state.toDos}
          checkBox={this.checkBox} />
      </div>
    );
  }
}

export default App;
