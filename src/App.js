import './reset.css'
import './App.css';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err))
  },[])

  function handleClick(id){
    const findProduct = products.find(elem => elem.id === id)
    setCurrentSale([...currentSale, findProduct])
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Burguer <span>Kenzie</span></h1>
        <form className='searchArea'>
          <input className='searchInput' placeholder='Digitar Pesquisa'/>
          <button className='btnSearch'>Pesquisar</button>
        </form>
      </header>
      <main>
        <ProductList products={products} handleClick={handleClick}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    </div>
  );
}

export default App;
