import "./style.css"

function CardCart(props){

    function deleteItem(id){
        const removeItem = props.currentSale.filter((item) => {
            return item.id !== id
        })

        props.setCurrentSale(removeItem)

    }


    return (
        <div className="cardProductCart">
            <figure>
                <img alt={props.name} src={props.image}/>
            </figure>
            <div className="cardProductContent">
               <h3>{props.name}</h3>
               <small>{props.category}</small>
            </div>
            <button onClick={() => deleteItem(props.id)}>🗑️</button>
        </div>
    )
}

export default CardCart