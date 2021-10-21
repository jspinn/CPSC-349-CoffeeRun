// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

(function (window) {
  'use strict';
  var App = window.App || {};

  console.log('running firebaseconfig')

  var FirebaseConfig = {
    apiKey: "AIzaSyBlVJFnLdbQRcUVoVKHai05p5g8s53ryRI",
    authDomain: "coffeerun-da0f4.firebaseapp.com",
    projectId: "coffeerun-da0f4",
    storageBucket: "coffeerun-da0f4.appspot.com",
    messagingSenderId: "1073501837849",
    appId: "1:1073501837849:web:c90542a637a9fc6cee6888",
    measurementId: "G-TT4DF0Y1VD"
  };

  App.FirebaseConfig = FirebaseConfig
  firebase.initializeApp(FirebaseConfig);

  window.App = App

})(window);