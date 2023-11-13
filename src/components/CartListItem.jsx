function CartListItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        onRemoveFromCart = Function.prototype,
        onQuantityChange = Function.prototype,
    } = props;

    return <li className="collection-item">
        {name} x{quantity} = {price * quantity} руб.
        <div className="quantity-buttons">
            <i
                id="quantity-add"
                className="material-icons non-select"
                onClick={(e) => onQuantityChange(e.target.id, id)}
            >add</i>
            <i
                id="quantity-reduce"
                className="material-icons non-select"
                onClick={(e) => onQuantityChange(e.target.id, id)}
            >remove</i>
        </div>
        <span className="secondary-content remove-order-item">
            <i className="material-icons" onClick={() => onRemoveFromCart(id)}>clear</i>
        </span>
    </li>;
}

export { CartListItem };