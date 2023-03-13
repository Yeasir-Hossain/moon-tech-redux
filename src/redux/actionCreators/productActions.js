import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

export const addtocart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const removefromcart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}
