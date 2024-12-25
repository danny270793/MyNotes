import { useEffect, useState, ReactElement } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Platform, getCurrentPlatform } from '../utils/platform';
import * as Fingerprint from '../utils/fingerprint';
import { safeStringify } from '../utils/json';

export const Splash = (): ReactElement => {
  const platform: Platform = getCurrentPlatform()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const requestFingerprint: () => void = async () => {
    if(platform !== 'CORDOVA') {
      setIsLoading(false)
      return
    }
    try {
      await Fingerprint.isAvailable()
      await Fingerprint.request()
      setIsLoading(false)
    } catch (error) {
      console.error(`error on fingerprint authentication ${safeStringify(error)}`)
      requestFingerprint()
    }
  }

  useEffect(() => {
    requestFingerprint()
  }, [])

  if(isLoading) {
    return (
      <>
        <div className="App">
          <header className="App-header">
            Loading...
          </header>
        </div>
      </>
    )
  }

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
      </header>
    </div>
  );
}
