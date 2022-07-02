
import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import { gapi } from 'gapi-script'
import Main from './components/Main';

const API_KEY = 'IzaSyBSZFasZYRXVWT_hezt0FPlW7AAM3ZL3pI'
const CLIENT_ID = '214100381972-lpdih25hg9rhkk8tb37lsbmev4aflr7d.apps.googleusercontent.com';
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
