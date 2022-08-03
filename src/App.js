
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = '¡Bienvenido a React Candy Shop!'/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
