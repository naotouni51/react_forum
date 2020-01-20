import { firestore, initializeApp } from 'firebase/app'
import 'firebase/firestore'

initializeApp({
  apiKey: "AIzaSyA-YuWOXd5022i_vKMCMrUiwZwiNREQtZQ",
  authDomain: "react-forum-5099e.firebaseapp.com",
  databaseURL: "https://react-forum-5099e.firebaseio.com",
  projectId: "react-forum-5099e",
  storageBucket: "react-forum-5099e.appspot.com",
  messagingSenderId: "639385373501",
  appId: "1:639385373501:web:cfc6be60dfef6ac984d354"
})

firestore().settings({ timestampsInSnapshots: true })

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => {
    console.error(err)
  })