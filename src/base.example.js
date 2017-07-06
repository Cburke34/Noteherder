import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "Your apiKey",
    authDomain: "Your authDomain",
    databaseURL: "Your databaseURL",
    projectId: "Your projectId",
    storageBucket: "Your storageBucket",
    messagingSenderId: "Your messagingSenderId"
  })

const db = database(app)

export default Rebase.createClass(db)