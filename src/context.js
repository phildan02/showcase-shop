import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartListShow: false,
    alertName: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.placeGoods = (goods) => {
        dispatch({type: 'PLACE_GOODS', payload: goods});
    };

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    };

    value.removeFromCart = (itemId) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}});
    };

    value.cartListShow = () => {
        dispatch({type: 'TOGGLE_CART_LIST'});
    };

    value.addToCart = (productItem) => {
        dispatch({type: 'ADD_TO_CART', payload: productItem});
    };

    value.quantityChange = (operation, itemId) => {
        dispatch({type: 'CHANGE_QUANTITY', payload: {operation, itemId}});
    };


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
};