/* -------------------------------------- Multiple Redux ---------------------------------------------------- */
// 1. Products
// 2. comments

const { createStore, combineReducers} = require("redux");

/* ------------------------------------------ Constant Declaration ---------------------------------------- */
// product const
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
// comment const
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";


/* ------------------------------------------ Initial State ---------------------------------------------- */
// product state
const initialProductState = {
    products: ["Milk", "Mango"],
    numberOfProducts: 2,
}
// comment state
const initialCommentState = {
    comments: ["You are nice person", "You are Bad Boy"],
    numberOfComments: 2,
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

// comment action
const getComment = () => {
    return {
        type: GET_COMMENT,
    }
}
const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment,
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

// comment Reducer
const commentReducer = (state = initialCommentState, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
            }
        case ADD_COMMENT:
            return {
                comments: [...state.comments, action.payload],
                numberOfComments: state.numberOfComments + 1,
            }
        default:
            return state
    }
}

const rootReduer = combineReducers({
    productR: productReducer,
    commentR: commentReducer,
  });
  



/* -------------------------------------------- Store -------------------------------------------- */
const store = createStore(rootReduer);
  
store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(getProduct());
store.dispatch(addProduct("Banana"));

store.dispatch(getComment());
store.dispatch(addComment("You are Hacker"));
store.dispatch(addComment("You are Lover boy"));



