import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};


const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app)


export default firestoreDB

export async function getAllItems() {

  const MiColeccion = collection (firestoreDB,'Productos')
  const ProductosSnapshot = await getDocs(MiColeccion)
  return ProductosSnapshot.docs.map( doc => { 
                return { ... doc.data(), id: doc.id  } 
        }
  )
}

export async function getItemsbyCategory ( categoId ) {

  const MiColeccion = collection ( firestoreDB, 'Productos' )
  const queryProductos = query ( MiColeccion, where ( "tipo", "==", categoId ) )
  const ProductosSnapshot = await getDocs(queryProductos)

  return ProductosSnapshot.docs.map( doc => { 
              return { ... doc.data(), id: doc.id  } 
        }
    )

}

export async function getItemDetalle ( id ) {
  const MiColeccion = collection ( firestoreDB, 'Productos' )
  const ProductRef = doc ( MiColeccion, id )
  const ProductosSnapshot = await getDoc ( ProductRef )
  
  return {  ...ProductosSnapshot.data(),  id: ProductosSnapshot.id  }

}