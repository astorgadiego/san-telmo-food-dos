import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  {/*}
    setTimeout(() => {
      <>
          <ItemListContainer saludo="Bienvenidos a su Comercio Favorito"/>
      </>    
        }, 2000);*/}
  return (
    <div className="App">
      <h1>Holaa</h1>
      <NavBar/>
      <ItemListContainer saludo="Bienvenidos a su Comercio Favorito"/>
    </div>
  );
}

export default App;
