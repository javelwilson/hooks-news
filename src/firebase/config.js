let apiKey
let authDomain
let databaseURL
let projectId
let storageBucket
let messagingSenderId
let appId
let measurementId

if (process.env.NODE_ENV !== 'production') {
    apiKey = process.env.REACT_APP_FIREBASE_API_KEY
    authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
    databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL
    projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
    storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
    messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
    appId = process.env.REACT_APP_FIREBASE_APP_ID
    measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
} else {
    apiKey = process.env.FIREBASE_API_KEY
    authDomain = process.env.FIREBASE_AUTH_DOMAIN
    databaseURL = process.env.FIREBASE_DATABASE_URL
    projectId = process.env.FIREBASE_PROJECT_ID
    storageBucket = process.env.FIREBASE_STORAGE_BUCKET
    messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID
    appId = process.env.FIREBASE_APP_ID
    measurementId = process.env.FIREBASE_MEASUREMENT_ID
}

var firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
}

export default firebaseConfig
