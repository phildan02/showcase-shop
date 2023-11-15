import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
    const {
        product: {
            mainId: id,
            displayName: name,
            displayDescription: description,
            price: {
                regularPrice: price
            },
            granted: [grantedItem],
        },
    } = props;

    const { images: { full_background: imageUrl } } = grantedItem;

    const { addToCart } = useContext(ShopContext);

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn yellow darken-4"
                    onClick={() => addToCart({
                        id,
                        name,
                        price
                    })}
                >Купить</button>
                <span className="right" style={{ fontSize: '1.8rem' }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };