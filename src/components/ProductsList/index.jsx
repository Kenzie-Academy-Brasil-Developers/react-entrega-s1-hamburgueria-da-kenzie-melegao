import Product from "../Product"
import './style.css'

function ProductList(props) {

    const products = props.products

    return (
        <div className="containerProducts">
            {products.map((elem) =>
             <Product key={elem.id} name={elem.name} category={elem.category} price={elem.price} image={elem.img} handleClick={props.handleClick} id={elem.id}/>
            )}
        </div>
    )
}

export default ProductList