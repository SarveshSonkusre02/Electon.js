const { app, BrowserWindow } = require('electron');
const React = require('react');
const ReactDOM = require('react-dom');

const App = () => {
  return (
    <div>
      <h1>Hello Electron!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
