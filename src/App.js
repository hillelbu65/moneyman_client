
import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import { gapi } from 'gapi-script'
import Main from './components/Main';
import Cookies from 'js-cookie';


const API_KEY = Cookies.get('APIkey')
const CLIENT_ID = Cookies.get('ClientID');
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
