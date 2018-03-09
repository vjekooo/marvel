
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCJOcobl07qKHtt7vVMQW6Uijtp8ZJDc8Y',
  authDomain: 'marvel-ac2d3.firebaseapp.com',
  databaseURL: 'https://marvel-ac2d3.firebaseio.com',
  projectId: 'marvel-ac2d3',
  storageBucket: 'marvel-ac2d3.appspot.com',
  messagingSenderId: '646359708505'
}

firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
