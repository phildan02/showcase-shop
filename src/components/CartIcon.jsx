import { useContext } from 'react';
import { ShopContext } from '../context';

function CartIcon() {
    const { order, cartListShow } = useContext(ShopContext);

    return (
        <div
            className="cart white-text yellow darken-4"
            onClick={cartListShow}
        >
            <i className="material-icons">shopping_cart</i>
            {order.length ? (
                <span className="cart-quantity">{order.length}</span>
            ) : null}
        </div>
    );
}

export { CartIcon }