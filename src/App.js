
import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import { gapi } from 'gapi-script'
import Main from './components/Main';
import { getMonth } from './components/month_overview_page/Data_management/pullDatat';

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

  const test = async () => {
    const resolt = await getMonth('1oHvBvgpsMOUHSDVUocOtGLjJyRj6p6H_krfkSX2UgUs', 'test', '03', '2022')
    console.log(resolt)
  }

  return (
    <div className="App">
      <Main/>
      <button onClick={test}>Test Data</button>
    </div>
  );
}

export default App;
