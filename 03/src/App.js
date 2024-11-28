import './App.css';
import NavBar from './components/navbar/NavBar.js'
import ProductList from './components/product list/ProductList';

function App() {
  const abc = new Promise((resolve, reject) => {
    resolve();
    reject();
  })

  console.log(abc);
  return (
    <div className="App">
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;
