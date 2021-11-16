import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC4MBjjRcf3u44FCiFsAKQ6oCPmBwO_Gmk',
  authDomain: 'port-folio-forum-35dcc.firebaseapp.com',
  projectId: 'port-folio-forum-35dcc',
  storageBucket: 'port-folio-forum-35dcc.appspot.com',
  messagingSenderId: '177717488365',
  appId: '1:177717488365:web:07bae63613332ba414fae4',
  measurementId: 'G-C2KHDV75T1'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
