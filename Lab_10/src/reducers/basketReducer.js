import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, CLEAR_PRODUCT} from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: []
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            var product = state.products.find(item => item.id == action.payload.id)

            if (product) {
                var index = state.products.indexOf(product)
                //шукаємо індекс в масиві, щоб змінити кількість цього елемента
                var products = state.products
                products[index].quantity += 1
                return {
                    ...state,
                    basketNumbers: state.basketNumbers + 1,
                    cartCost: state.cartCost + action.payload.price,
                    products: products
                }
            } else {
                var obj = {...action.payload, quantity: 1}
                // ... - створюємо копію, щоб добавити екстра поле
                return {
                    ...state,
                    basketNumbers: state.basketNumbers + 1,
                    cartCost: state.cartCost + action.payload.price,
                    products: state.products.concat(obj)
                    //concat - додає в масив
    
                }
            }
            
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case CLEAR_PRODUCT:
            return{
                ...state,
                basketNumbers: state.basketNumbers - action.payload.quantity,
                cartCost: state.cartCost - (action.payload.quantity * action.payload.price),
                products: state.products.filter(item => item.id != action.payload.id)
            }
        default:
            return state;
    }
}