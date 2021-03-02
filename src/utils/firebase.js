import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBzsPE1p7qXMw-TDkn_tH5TSek21ISSxds",
  authDomain: "twotter-e6df5.firebaseapp.com",
  databaseURL: "https://twotter-e6df5.firebaseio.com",
  projectId: "twotter-e6df5",
  storageBucket: "twotter-e6df5.appspot.com",
  messagingSenderId: "7670825799",
  appId: "1:7670825799:web:9a61246e75c87c25a58262"
}

firebase.initializeApp(config)
export const google = new firebase.auth.GoogleAuthProvider()
export const twitter = new firebase.auth.TwitterAuthProvider()
export const facebook = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export default firebase
