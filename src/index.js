import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyC5UvXqoM0ijZIG2BngCpAMFHlSu2SwitA",
  authDomain: "myblog-dbb10.firebaseapp.com",
  databaseURL: "https://myblog-dbb10.firebaseio.com",
  projectId: "myblog-dbb10",
  storageBucket: "myblog-dbb10.appspot.com",
  messagingSenderId: "636865537944"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
