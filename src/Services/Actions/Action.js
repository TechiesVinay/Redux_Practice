 import {ADD_TO_CART} from '../Constants'
export const AddToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data:data
    }
}
export const RemoveToCart = (data) => {
    return {
        type: 'REMOVE_TO_CART',
        data:data
    }
}