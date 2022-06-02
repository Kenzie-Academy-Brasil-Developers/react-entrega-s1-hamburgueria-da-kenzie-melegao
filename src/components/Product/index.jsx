import './style.css'

function Product (props) {

return (
    <div className='cardProduct'>
        <figure className='cardProductFig'>
            <img
                className='cardProductImg'
                src={props.image}
                alt={props.name}
            />
        </figure>
        <h3 className='cardProductTittle'>{props.name}</h3>
        <small className='cardProductCategory'>{props.category}</small>
        <h4 className='cardProductPrice'>
            {Math.abs(props.price).toLocaleString('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            })}
        </h4>
        <button className='btnAddCart' onClick={() => props.handleClick(props.id)}>Adicionar</button>
    </div>
)

}

export default Product