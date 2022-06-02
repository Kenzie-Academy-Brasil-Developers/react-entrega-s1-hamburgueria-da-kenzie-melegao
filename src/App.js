import './reset.css'
import './App.css';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState('')
  

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err))
  },[])

  function handleClick(id){

    const findProduct = products.find(elem => elem.id === id)

    const verify = currentSale.find((elem) => findProduct.id === elem.id)

    verify === undefined ?
      setCurrentSale([...currentSale, findProduct])
      :
      toast.error('Produto já adicionado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }); 
  }

  
  function showProduct(event) {
    event.preventDefault()
    setFilteredProducts(event.target.filter.value)

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burguer <span>Kenzie</span></h1>
        <form className='searchArea' onSubmit={(e) => showProduct(e)}>
          <input
            className='searchInput'
            placeholder='Digitar Pesquisa'
            name='filter'            
            />
          <button className='btnSearch' type='submit'>Pesquisar</button>
        </form>
      </header>
      <main>
        <ProductList products={products} handleClick={handleClick} filteredProducts={filteredProducts}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    </div>
  );
}

export default App;
