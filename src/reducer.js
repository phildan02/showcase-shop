export function reducer(state, { type, payload }) {
    switch (type) {
        case 'PLACE_GOODS': {
            return {
                ...state,
                goods: payload || [],
                loading: false
            };
        }

        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            };
        }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id)
            }

        case 'CHANGE_QUANTITY': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.itemId);
            const editedOrder = state.order.map((orderItem, index) => {
                if (index === itemIndex) {
                    let newQuantity = null;
                    if (payload.operation === 'quantity-add') {
                        newQuantity = ++orderItem.quantity;
                    } else if (orderItem.quantity > 1) {
                        newQuantity = --orderItem.quantity;
                    } else {
                        newQuantity = orderItem.quantity;
                    }
                    return {
                        ...orderItem,
                        quantity: newQuantity
                    }
                } else {
                    return orderItem;
                }
            });
            return {
                ...state,
                order: editedOrder
            };
        }

        case 'TOGGLE_CART_LIST':
            return {
                ...state,
                isCartListShow: !state.isCartListShow
            }
        
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }

        default:
            return state;
    }
}