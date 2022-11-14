import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Hello from './Hello';
import Student from './Student';

function App() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <h1>World</h1>
      <Hello/>
      <Student fnm =" Pritesh" name="Patel" />
    </Fragment>
  );
}

export default App;
