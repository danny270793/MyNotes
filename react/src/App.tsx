import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Platform, usePlatform } from './hooks/usePlatform';
import { safeStringify } from './utils/json';

function App() {
  const platform: Platform = usePlatform()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <div style={{textAlign: 'left'}}>
          <input type='checkbox' checked={platform === 'CORDOVA'} readOnly/> Mobile
          <br/>
          <input type='checkbox' checked={platform === 'WEB'} readOnly/> Web
          <br/>
          <input type='checkbox' checked={platform === 'ELECTRON'} readOnly/> Desktop
        </div>
        <div style={{textAlign: 'left'}}>
          <pre className='App-json'>{safeStringify(window, 4)}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
