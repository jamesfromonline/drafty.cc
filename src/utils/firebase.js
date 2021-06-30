import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "speek2-5f7d5.firebaseapp.com",
  databaseURL: "https://speek2-5f7d5.firebaseio.com",
  projectId: "speek2-5f7d5",
  storageBucket: "speek2-5f7d5.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APPID
}

firebase.initializeApp(config)
export const google = new firebase.auth.GoogleAuthProvider()
export const twitter = new firebase.auth.TwitterAuthProvider()
export const facebook = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export default firebase
