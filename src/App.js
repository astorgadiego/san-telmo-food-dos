import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemdetailConteiner from './componentes/ItemdetailConteiner';


function App() {
  return (
    <div  className="App bg-emerald-300">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="Bienvenidos a su Comercio Favorito"/>}/>
            <Route path='/Inicio' element={<ItemListContainer saludo="Bienvenidos a su Comercio Favorito"/>}/>
            <Route path='/VerduraCongelada' element={<ItemListContainer saludo="Nuestras Verdura Congeladas"/>}/>
            <Route path='/VerduraCongelada/:prodId' element={<ItemdetailConteiner/>}/>  
            <Route path='/Semilla' element={<ItemListContainer saludo="Nuestras Semillas"/>}/> 
            <Route path='/Semilla/:prodId' element={<ItemdetailConteiner/>}/> 
            <Route path='/Contacto' element={<ItemListContainer saludo="Comuniquese con Nosotros"/>}/>
            <Route path='/Carrito' element={<ItemListContainer saludo="Detalle de su compra"/>}/>   
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
