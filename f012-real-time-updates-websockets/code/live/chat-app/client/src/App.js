import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ws: null,
      messages: [],
      draft: '',
    };
  }

  componentWillMount() {
    const url = 'ws://localhost:1234';
    const ws = new WebSocket(url);

    this.setState({ ws: ws });

    ws.onopen = () => {
      console.log('Connected!');
    };

    ws.onmessage = message => {
      const text = message.data;
      this.setState({
        messages: [...this.state.messages, text],
      });
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(message => (
            <li key={message}>{message}</li>
          ))}
        </ul>

        <form onSubmit={e => {
          e.preventDefault();
          this.state.ws.send(this.state.draft);
          this.setState({ draft: '' });
        }}>
          <input
              onChange={e => this.setState({ draft: e.target.value })}
              value={this.state.draft}
              type="text"
              placeholder="Melding" />
        </form>
      </div>
    );
  }
}

export default App;
