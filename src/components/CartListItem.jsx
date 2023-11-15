import { useContext } from 'react';
import { ShopContext } from '../context';

function CartListItem(props) {
    const {
        id,
        name,
        price,
        quantity
    } = props;

    const { removeFromCart, quantityChange } = useContext(ShopContext);

    return <li className="collection-item">
        {name} x{quantity} = {price * quantity} руб.
        <div className="quantity-buttons">
            <i
                id="quantity-add"
                className="material-icons non-select"
                onClick={(e) => quantityChange(e.target.id, id)}
            >add</i>
            <i
                id="quantity-reduce"
                className="material-icons non-select"
                onClick={(e) => quantityChange(e.target.id, id)}
            >remove</i>
        </div>
        <span className="secondary-content remove-order-item">
            <i className="material-icons" onClick={() => removeFromCart(id)}>clear</i>
        </span>
    </li>;
}

export { CartListItem };