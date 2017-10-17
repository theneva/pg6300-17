import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      colors: [],
      newColorName: '',
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
        <div>
          <label>
            Color name:
            &nbsp;
            <input
              type="text"
              onChange={e => this.setState({
                newColorName: e.target.value,
              })}
            />
          </label>
          <button
            onClick={() => {
              fetch('http://localhost:1234/colors', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: this.state.newColorName,
                }),
              })
                .then(res => res.json())
                .then(savedColor => {
                  console.log('saved', savedColor);
                  this.setState({
                    colors: [
                      ...this.state.colors,
                      savedColor,
                    ],
                  })
                })
                .catch(err => console.error(err));
            }}
          >
            Send!
          </button>
        </div>
        <div>
          {this.state.colors.length === 0 ? (
            <p>There are no colors yet</p>
          ) : (
            <ul>
              {this.state.colors.map(color => (
                <li key={color.name}>
                  {color.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
