function CartIcon(props) {
    const { quantity = 0, onCartListShow = Function.prototype } = props;

    return (
        <div
            className="cart white-text yellow darken-4"
            onClick={onCartListShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { CartIcon }