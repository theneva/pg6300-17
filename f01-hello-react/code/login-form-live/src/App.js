import React from 'react';
import './App.css';

class App extends React.Component {
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
        <div className="App-header">
          <h1>Mitt fantastiske innloggingsskjema</h1>
        </div>

        <div className="form-group">
          <label htmlFor="input-username">
            Brukernavn
          </label>
          <input
            id="input-username"
            className="form-control"
            placeholder="Brukernavn"
            onChange={e => {
              this.setState({
                username: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="input-password">
            Passord
          </label>
          <input
            id="input-password"
            placeholder="Passord"
            className="form-control"
            type="password"
            onChange={e => {
              this.setState({
                password: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              // 1. hent brukernavn
              const username = this.state.username;

              // 2. hent passord
              const password = this.state.password;

              // 3. alert(brukernavn og passord)
              alert(`brukernavn: ${username}, passord: ${password}`);
            }}
          >
            Logg inn
          </button>
        </div>

      </div>
    );
  }
}

export default App;














