import { useContext } from 'react';
import { ShopContext } from '../context';
import { CartListItem } from './CartListItem';

function CartList(props) {
    const { order, cartListShow } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, orderItem) => (sum + orderItem.price * orderItem.quantity), 0)

    return <ul className="collection cart-list">
        <li className="collection-item active yellow darken-4">Корзина</li>
        {
            order.length ? order.map(orderItem => (
                <CartListItem key={orderItem.id} {...orderItem} />
            )) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item total-price">
            Общая стоимость: {totalPrice} руб.
            <button className='secondary-content btn yellow darken-4 order-btn'>Оформить</button>
        </li>
        <i className='material-icons cart-list-close' onClick={cartListShow}>close</i>
    </ul>
}

export { CartList };