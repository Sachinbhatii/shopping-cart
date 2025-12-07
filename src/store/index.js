import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import { loadState, saveState } from '../utils/localStorage';

// root reducer
const rootReducer = combineReducers({
    cart: cartReducer
});

// load persisted state
const persisted = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    persisted,
    composeEnhancers(applyMiddleware(thunk))
);

// subscribe to save state
store.subscribe(() => {
    // persist only cart slice to keep localStorage small
    const state = store.getState();
    saveState({
        cart: state.cart
    });
});

export default store;
