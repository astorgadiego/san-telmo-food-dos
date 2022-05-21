import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDrtm5_PTlLritw4Im-xhY7b0vorMUXFC0",
  authDomain: "react-d5fbf.firebaseapp.com",
  projectId: "react-d5fbf",
  storageBucket: "react-d5fbf.appspot.com",
  messagingSenderId: "778369973994",
  appId: "1:778369973994:web:fd664823a3a2c60959a193"
};


const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app)


export default firestoreDB

export async function getAllItems() {

  const MiColeccion = collection (firestoreDB,'Productos')
  const ProductosSnapshot = await getDocs(MiColeccion)
  return ProductosSnapshot.docs.map( doc => doc.data() )
  
}