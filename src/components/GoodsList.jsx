import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
    const { goods = [], onAddToCart = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Ничего нет</h3>
    }

    return <div className='goods'>
        {goods.map(productItem => (
            <GoodsItem key={productItem.mainId} product={productItem} onAddToCart={onAddToCart}/>
        ))}
    </div>
}

export { GoodsList };