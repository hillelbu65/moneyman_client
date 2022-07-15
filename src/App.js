
import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import { gapi } from 'gapi-script'
import Main from './components/Main';

const API_KEY = '<YOUR API KEY>'
const CLIENT_ID = '<YOUR CLIENT ID>';
const SCOPES = 'https://www.googleapis.com/auth/drive'

function App() {

  useEffect(() => {
    const start =  () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
    };

    gapi.load('client:auth2', start);
  }, []);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
