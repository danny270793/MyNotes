import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Platform, usePlatform } from './hooks/usePlatform';

function App() {
  const platform: Platform = usePlatform()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <div>
          <input type='checkbox' checked={platform == 'CORDOVA'} readOnly/> Mobile
          <br/>
          <input type='checkbox' checked={platform == 'WEB'} readOnly/> Web
          <br/>
          <input type='checkbox' checked={platform == 'ELECTRON'} readOnly/> Desktop
        </div>
      </header>
    </div>
  );
}

export default App;
