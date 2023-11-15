import { useContext } from 'react';
import { ShopContext } from '../context';
import { GoodsItem } from './GoodsItem';

function GoodsList() {
    const { goods } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Ничего нет</h3>
    }

    return <div className='goods'>
        {goods.map(productItem => (
            <GoodsItem key={productItem.mainId} product={productItem} />
        ))}
    </div>
}

export { GoodsList };