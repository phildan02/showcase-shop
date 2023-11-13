import { CartListItem } from './CartListItem';

function CartList(props) {
    const {
        order = [],
        onCartListShow = Function.prototype,
        onRemoveFromCart = Function.prototype,
        onQuantityChange = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, orderItem) => (sum + orderItem.price * orderItem.quantity), 0)

    return <ul className="collection cart-list">
        <li className="collection-item active yellow darken-4">Корзина</li>
        {
            order.length ? order.map(orderItem => (
                <CartListItem
                    key={orderItem.id}
                    {...orderItem}
                    onRemoveFromCart={onRemoveFromCart}
                    onQuantityChange={onQuantityChange}
                />
            )) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item total-price">
            Общая стоимость: {totalPrice} руб.
            <button className='secondary-content btn yellow darken-4 order-btn'>Оформить</button>
        </li>
        <i className='material-icons cart-list-close' onClick={onCartListShow}>close</i>
    </ul>
}

export { CartList };