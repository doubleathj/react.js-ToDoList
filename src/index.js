import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => <div>HELLOWORLD!!</div>;

const OtherWorld = () => <div>OTHERWORLD!!</div>;

const AnotherWorld = () => <div>ANOTEHRWORLD!!</div>;

const App = () => (
  <div>
    슈퍼월드!
    <HelloWorld />
    <OtherWorld />
    <AnotherWorld />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
