import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCie8pnajMcfbKegtF6AQl5V7AeVCIjoXU",
  authDomain: "weatherappratish.firebaseapp.com",
  projectId: "weatherappratish",
  storageBucket: "weatherappratish.appspot.com",
  messagingSenderId: "471060874751",
  appId: "1:471060874751:web:f48db2004cd86224ecd3ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);