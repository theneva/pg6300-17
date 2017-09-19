const React = require('react');
const ReactDOMServer = require('react-dom/server');
 
class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
 
const html = ReactDOMServer.renderToString(
  <MyComponent />
);

console.log('html =', html);
