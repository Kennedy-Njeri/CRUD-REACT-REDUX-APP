import {createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import {reduxFirestore, firestoreReducer} from 'redux-firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCa2P-eFrAmyg670ilr06K6dA4rrNKr5tA",
    authDomain: "react-app-2cedf.firebaseapp.com",
    databaseURL: "https://react-app-2cedf.firebaseio.com",
    projectId: "react-app-2cedf",
    storageBucket: "react-app-2cedf.appspot.com",
    messagingSenderId: "1080338787159",
    appId: "1:1080338787159:web:d7a340f3604a5b17562c12"
}


// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}


// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Init firebase instance
const firestore = firebase.firestore()


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore)


// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})

// create initial state
const initialState = {}


// create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
