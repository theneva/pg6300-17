import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList';
import ColorForm from './ColorForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      colors: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:1234/colors')
      .then(res => res.json())
      .then(colors => this.setState({ colors }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <ColorForm
          onCreated={createdColor => this.setState({
              colors: [
                ...this.state.colors,
                createdColor,
              ],
          })}
        />
        <ColorList colors={this.state.colors} />
      </div>

    );
  }
}

export default App;
