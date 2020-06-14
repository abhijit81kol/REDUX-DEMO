const redux = require("redux");

// Redux logger is a library which logges all the logs related to REDUX in my application
const reduxLogger = require("redux-logger");

const createStore = redux.createStore; // need to import createStore to create a STORE
const combineReducers = redux.combineReducers; // need to import combineReducers to combine multiple REDUCERS

//State of my appliation
const initialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState = {
  noOfIceCreams: 20,
};

const BUY_CAKE = "BUY_CAKE"; // creating a TYPE string for ACTION
const BUY_ICECREAM = "BUY_ICECREAM"; // creating a TYPE string for ACTION

//REDUC ACTION CTREATOR should me a function, which return an ACTION as Object
//ACTION is an object with TYPE (here, type: BUY_CAKE) property
buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Rexud Action",
  };
};
buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Second Rexud Action",
  };
};

// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// creating a REDUX STORE with createStore from REDUX library.
// CreateStore method accepts a parameter. The parameter will be REDUCER, which controlls how the transition will happen.
const store = createStore(rootReducer);

// Once STORE is created, I logged that to console and that is initial state of the STORE
// Output: Initial State { noOfCakes: 10 }
console.log("Initial State", store.getState());

// After that we setup a listener to the STORE. SO anytime STORE updates, we log that to console
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// when I dispatched the first ACTION (*** I need to pass ACTION method as a parameter in DISPATCH method),
// the REDUCER sees the ACTION "type" is BUY_CAKE (becasue we made TYPE as BUY_CASE in ACTION object)
// It will then match the TYPE with SWITCH-CASES, it matches the TYPE and simply decrement "noOfCakes" by 1 and return new STATE
// So now the store has been updated, called the listener and return updated store value
// Output: Initial State { noOfCakes: 9 }
store.dispatch(buyCake());

// Output: Initial State { noOfCakes: 8 }
store.dispatch(buyCake());

// Output: Initial State { noOfCakes: 7 }
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// At the end I simply UNSUBSCRIBE to any changes in the STORE
unsubscribe();
