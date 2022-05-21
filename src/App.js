import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemdetailConteiner from './componentes/ItemdetailConteiner';
import { CartContextProvider } from './Store/CartContext';
import CartView from './componentes/CartView';

function App() {
  return (
    <div  className="App bg-emerald-300">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer saludo="Bienvenidos a su Comercio Favorito"/>}/>
                <Route path='/Inicio' element={<ItemListContainer saludo="Bienvenidos a su Comercio Favorito"/>}/>
                <Route path='/tipo/:categoId' element={<ItemListContainer saludo="Nuestras Verdura Congeladas"/>}/>
                <Route path='/VerduraCongelada/:prodId' element={<ItemdetailConteiner/>}/>  
                <Route path='/Semilla' element={<ItemListContainer saludo="Nuestras Semillas"/>}/> 
                <Route path='/Semilla/:prodId' element={<ItemdetailConteiner/>}/> 
                <Route path='/Contacto' element={<ItemListContainer saludo="Comuniquese con Nosotros"/>}/>
                <Route path='/Carrito' element={<CartView/>}/>  
            </Routes>     
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
