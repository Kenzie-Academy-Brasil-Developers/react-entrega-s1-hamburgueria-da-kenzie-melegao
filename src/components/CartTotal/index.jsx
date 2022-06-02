import './style.css'

function CartTotal(props) {

    const totalValue = props.currentSale.reduce((valorAnterior, valorAtual) => {
        return valorAtual.price + valorAnterior;
    },0)

    function clearCart(){
        return props.setCurrentSale([])
    }

    return (
        <>
            <div className="cartTotalResume">
                <h3 className="cartTotalTitle">Total</h3>
                <h3 className="cartTotalValue">
                {Math.abs(totalValue).toLocaleString('pt-BR',{
                                style: 'currency',
                                currency: 'BRL',
                            })}
                </h3>
            </div>
            <button className="cartTotalButton" onClick={() => clearCart()}>Remover todos</button>
        </>
    )
}

export default CartTotal