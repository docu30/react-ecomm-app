import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducers';

const initialState = {};

/*  o functie care accepta doi parametrii state si action
    si va returna un state nou. Aici va returna produsele pe care le va lua din data.products
*/
const reducer = combineReducers({
    productList: productListReducer
})

/* cream un store cu ajutorul functiei createStore din redux
   pe care o importam din Redux. Aceasta functie accepta ca si parametrii
   reducer si initialState

   Pentru a adauga redux-thunk updatam createStore adaugand al treilea parametru compose(applyMiddleware)
*/
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// folosim composeEnhancer pentru a putea afisa in DEV_tools redux

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;