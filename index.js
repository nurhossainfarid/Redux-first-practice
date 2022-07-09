// get store from redux store
const { createStore } = require("redux");

// Defining Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";


// State
const initialCountState = {
    count: 0,
};

const initialUsersState = {
    users: [
        {
            name: "Nur Hossain Farid",
        }
    ]
};

/* ------------------------------------------------ Action ------------------------------------------------ */
// Action is an object. That have 2 important properties. 1) Type and 2) Playload(That is transform our data)
const incrementCount = () => {
    return {
        type: INCREMENT,
    };
};
const decrementCount = () => {
    return {
        type: DECREMENT,
    };
};

const add_USER = () => {
    return {
        type: ADD_USER,
        payload: {name: "Ahsan"},
    };
};


/* ---------------------------------------- Create Reducer for counter ----------------------------------- */
// Reducer is pure function where function take input and gives output based on input

const counterReducer = (state = initialCountState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
    
        default:
            state;
    }
}

/* ----------------------------------------- Create store for counter -------------------------------------- */
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());