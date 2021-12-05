import {CLEAR_PRODUCT} from './types';

export const clearProduct = (product) => {
    return(dispatch)=>{
        console.log("Inside clear product");
        console.log("Product name", product);

        dispatch({
            type: CLEAR_PRODUCT,
            payload: product
        })
    }
}