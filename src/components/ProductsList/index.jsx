import Product from "../Product"
import './style.css'

function ProductList(props) {

    const products = props.products
    const searchFilter = props.filteredProducts.toLowerCase()

    return (
        <div className="containerProducts">
            {searchFilter === '' ?
            (<>
                {products.map((elem) =>
                    <Product key={elem.id} name={elem.name} category={elem.category} price={elem.price} image={elem.img} handleClick={props.handleClick} id={elem.id}/>
                   )}
            </>)
            :
            (<>
                {products.map((elem) => 
                    elem.name.toLowerCase().includes(searchFilter) || elem.category.toLowerCase().includes(searchFilter) ?
                    <Product key={elem.id} name={elem.name} category={elem.category} price={elem.price} image={elem.img} handleClick={props.handleClick} id={elem.id}/>
                    :
                    console.log('no result')
                )}
            </>)
            }
            
        </div>
    )
}

export default ProductList