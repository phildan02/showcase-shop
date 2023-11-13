import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { CartIcon } from './CartIcon'
import { CartList } from './CartList';
import { Alert } from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartListShow, setCartListShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        }).then(response => response.json()).then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false);
        });
    }, []);

    const addToCart = (productItem) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === productItem.id);

        if (itemIndex < 0) {
            const newItem = {
                ...productItem,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(productItem.name);
    };

    const removeFromCart = (itemId) => {
        const orderItemIndex = order.findIndex(orderItem => orderItem.id === itemId);
        const reducedOrder = [...order];
        reducedOrder.splice(orderItemIndex, 1);
        setOrder(reducedOrder);
    };

    const quantityChange = (operation, itemId) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === itemId);
        const editedOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
                const editedOrderItem = { ...orderItem };
                if (operation === 'quantity-add') {
                    editedOrderItem.quantity++;
                } else if (editedOrderItem.quantity > 1) {
                    editedOrderItem.quantity--;
                }
                return editedOrderItem;
            } else {
                return orderItem;
            }
        });

        setOrder(editedOrder);
    }

    const handleCartListShow = () => {
        setCartListShow(!isCartListShow);
    };

    const closeAlert = () => { setAlertName('') };


    return <main className="container content">
        <CartIcon quantity={order.length} onCartListShow={handleCartListShow} />
        {loading ? <Preloader /> : <GoodsList goods={goods} onAddToCart={addToCart} />}
        {isCartListShow && <CartList
            order={order}
            onCartListShow={handleCartListShow}
            onRemoveFromCart={removeFromCart}
            onQuantityChange={quantityChange}
        />}
        { alertName && <Alert name={alertName} closeAlert={closeAlert} /> }
    </main>
}

export { Shop };