import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, doc,setDoc , getDoc, query, where, Timestamp,collection, getDocs, addDoc} from 'firebase/firestore/lite'

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

//obtener solo un item segun el id para pasar al item detalle
export async function getItemDetalle ( id ) {
  const MiColeccion = collection ( firestoreDB, 'Productos' )
  const ProductRef = doc ( MiColeccion, id )
  const ProductosSnapshot = await getDoc ( ProductRef )
  
  return {  ...ProductosSnapshot.data(),  id: ProductosSnapshot.id  }

}

export async function DatosAFireBase (  ) {
      const Reserva =  [
        { tipo:"Verdura" , stock: 10,titulo: "Brocoli", precio: 541, imagenURL: '/imagenes/brocoli.jpg' },
        {  tipo:"Verdura" ,stock: 10,titulo: "Cebolla", precio: 22, imagenURL: '/imagenes/cebolla.jpg' },
        {  tipo:"Verdura" ,stock: 10,titulo: "Choclo", precio: 121, imagenURL: '/imagenes/choclo-congelado.jpg' },
        {  tipo:"Semilla" ,stock: 10,titulo: "Mix Premium", precio: 56, imagenURL: '/imagenes/mix-premium.png' },
        { tipo:"Semilla" ,stock: 10,titulo: "Semillas de Lino", precio: 64, imagenURL: '/imagenes/semillas-de-lino.png' },
        { tipo:"Verdura" ,stock: 10,titulo: "Chaucha Congelada", precio: 64, imagenURL: '/imagenes/chaucha-congelada.jpg' },
    ]

    const MiColeccion = collection ( firestoreDB, 'Productos' )
    
    Reserva.forEach( (item)=>{ 
          const newDoc = doc( MiColeccion )
          setDoc( newDoc, item )
                .then( ()=> {  
                   console.log( "Document escrito con id: ", newDoc.id );
                })
                .catch( (err)=> {
                    console.error( "Error al cargar los datos:", err )
                })
    })

}

export async function CreateOrdendeCompra( orderData )  {
  const buyTimeStamp = Timestamp.now()
  const OrdenConFecha = {
    ...orderData, date: buyTimeStamp
  } 

  const MiColeccion = collection ( firestoreDB, 'OrdendeCompra' )
  const ordenDoc = await addDoc ( MiColeccion, OrdenConFecha )


    console.log(  "Orden Lista con el ID", ordenDoc.id);
    console.log( OrdenConFecha );
    alert("Gracias Por su Compra. Su ID de la compra es: "+ ordenDoc.id+ "  Y su Total a pagar es: $"+ orderData.total )
    return ordenDoc.id
}