import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAxInKfOthGdB8c2Ib10ne65_KtBt0ZzFA",
    authDomain: "calc-app-7af3b.firebaseapp.com",
    databaseURL: "https://calc-app-7af3b.firebaseio.com",
    projectId: "calc-app-7af3b",
    storageBucket: "calc-app-7af3b.appspot.com",
    messagingSenderId: "412658269427",
    appId: "1:412658269427:web:205eb1670575c5b7"
};

var fireapp;
try {
    fireapp = firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

const initial = {
    login: false,
    username: '(click here!)',
    email: '',
    data: [],
    items: []
}

function fireReducer(state = initial, action){
    switch (action.type) {
        case 'UPDATE_USER':
            return action.value;
        default:
            return state;
    }
}

export function initStore(state = initial) {
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}