import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialstate = {
    cart: [],

}

const productReducer = (state = initialstate, action) => {

    const selectedproduct = state.cart.find(product => product._id === action.payload._id)

    switch (action.type) {
        case ADD_TO_CART:
            if (selectedproduct) {
                const newcart = state.cart.filter(product => product._id !== selectedproduct._id)
                selectedproduct.quantity += 1;
                return {
                    ...state,
                    cart: [...newcart, selectedproduct]
                }
            } return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            if (selectedproduct.quantity > 1) {
                const newcart = state.cart.filter(product => product._id !== selectedproduct._id)
                selectedproduct.quantity -= 1;
                return {
                    ...state,
                    cart: [...newcart, selectedproduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            }
        default:

            return state;

    }


}

export default productReducer