import CardCart from '../CardCart';
import CartTotal from '../CartTotal';
import './style.css';

function Cart(props) {

    return (
        <div className='cart'>
            {props.currentSale.length < 1 ?
             (<>
                <div className='cartTitle'>
                    <h3 className='cartTitleH3'>Carrinho de compras</h3>
                </div>
                <div className='contentCartEmpty'>
                    <h3 className='contentCartH3'>Sua sacola está vazia</h3>
                    <p className='contentCartP'>Adicione itens</p>
                </div>
            </>)
            :
             (<>
                <div className='cartTitle'>
                    <h3 className='cartTitleH3'>Carrinho de compras</h3>
                </div>
                <div className='contentCart'>
                    {props.currentSale.map((elem) =>
                        <CardCart key={elem.id} id={elem.id} currentSale={props.currentSale} name={elem.name} category={elem.category} image={elem.img} setCurrentSale={props.setCurrentSale}/>
                )}
                </div>
                <div className='resumeCart'>
                    <CartTotal currentSale={props.currentSale} setCurrentSale={props.setCurrentSale}/>
                </div>
             </>)
            }
            
        </div>
    )
}

export default Cart
