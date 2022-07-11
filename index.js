// store.dispatch(incrementCount());
// store.dispatch(incrementCount());
// store.dispatch(incrementCount());
// store.dispatch(decrementCount());


/* ------------------------------------- Follow those step for creating redux ------------------------------ */
// 1. State: count = 0
// 2. Action: Increment, Decrement, Reset
// 3. Reducer: Written logic for Increment, Decrement, Reset
// 4. Store


const { createStore } = require("redux");

// Constant Declare
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

/* ------------------------------------------------ State ---------------------------------------------------- */
const initialState = {
    count: 0,
};

/* --------------------------------------------- Action ----------------------------------------------------- */
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}
const resetCounterAction = () => {
    return {
        type: RESET,
    }
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
}

/* --------------------------------------------- Reducer -------------------------------------------------- */
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }
    
        default:
            state;
    }
}

/* ---------------------------------------------- Store ----------------------------------------------------- */
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));