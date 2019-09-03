import React from 'react';
import logo from './logo.svg';
import './App.css';
import SharedCode from 'SharedCode'

function App() {

  function callAPI() {
      console.log("call API")
      var sharedCode = SharedCode
    console.log("platform name " + sharedCode.com.jetbrains.handson.mpp.mobile.platformName())
  }

  return (
    <div className="App">
      <header className="App-header">
        <button style={buttonStyle} onClick={callAPI}>Call API</button>
      </header>
    </div>
  );
}

const buttonStyle = {
  width: 500,
  height: 80,
  fontSize: 20
};

export default App;
