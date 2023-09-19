// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBwoRgK6WYH0_PekEtsUKRA8984D8sNSMQ",
  authDomain: "perplexity-f0827.firebaseapp.com",
  projectId: "perplexity-f0827",
  storageBucket: "perplexity-f0827.appspot.com",
  messagingSenderId: "87083513496",
  appId: "1:87083513496:web:00429925bfafb0a45682ed",
  measurementId: "G-PNP89JHB01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, GoogleAuthProvider };
