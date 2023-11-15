import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { CartIcon } from './CartIcon'
import { CartList } from './CartList';
import { Alert } from './Alert';

function Shop() {
    const { loading,
        placeGoods,
        isCartListShow,
        alertName
    } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        }).then(response => response.json()).then(data => placeGoods(data.shop));
    //eslint-disable-next-line
    }, []);

    return <main className="container content">
        <CartIcon />
        {loading ? <Preloader /> : <GoodsList />}
        {isCartListShow && <CartList />}
        {alertName && <Alert />}
    </main>
}

export { Shop };