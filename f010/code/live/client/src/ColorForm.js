import React, { Component } from 'react';

class ColorForm extends Component {
  constructor() {
    super();

    this.state = {
      newColorName: '',
    };
  }

  render() {
    return (
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
                this.props.onCreated(savedColor);
              })
              .catch(err => console.error(err));
          }}
        >
          Send!
        </button>
      </div>
    )
  }
}

export default ColorForm;
