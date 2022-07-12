/* -------------------------------------- Logger Middleware use -------------------------------------------- */
// 1. Products

const { createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

/* ------------------------------------------ Constant Declaration ---------------------------------------- */
// product const
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";



/* ------------------------------------------ Initial State ---------------------------------------------- */
// product state
const initialProductState = {
    products: ["Milk", "Mango"],
    numberOfProducts: 2,
}


/* ----------------------------------------- Action ---------------------------------------------------- */
// product action
const getProduct = () => {
    return {
        type: GET_PRODUCT,
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}


/* ----------------------------------------------- Reducer ----------------------------------------------- */
// product Reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }
        default:
            return state
}
}

/* -------------------------------------------- Store -------------------------------------------- */
const store = createStore(productReducer, applyMiddleware(logger));
  
store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(getProduct());
store.dispatch(addProduct("Banana"));




