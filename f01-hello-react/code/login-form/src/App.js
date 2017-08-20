import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => {
          e.preventDefault(); // prevent page reload when form is submitted

          console.log('state', JSON.stringify(this.state));
          console.log('submitted');
        }}>
          <h1>Fantastisk login-side</h1>
          <div className="form-group">
            <label htmlFor="username-input">Brukernavn</label>
            <input
              className="form-control"
              id="username-input"
              type="text"
              placeholder="brucewayne1234"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Passord</label>
            <input
                className="form-control"
                id="password-input"
                type="password"
                placeholder="*********"
                onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button
            className="btn btn-primary btn-block"
          >
            Logg inn!
          </button>
        </form>
      </div>
    );
  }
}

export default App;
