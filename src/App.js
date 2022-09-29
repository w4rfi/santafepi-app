import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'




function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting='SantaDepi' />
      </main>
    </div>
  );
}

export default App;
