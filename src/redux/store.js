import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducers/auth";
import { signupReducer } from "./signup/signup.reducer";
import { productListReducer } from "./reducers/productReducers";
import { productDetailsReducer } from "./reducers/productReducers";
import { cartReducer } from './reducers/cartReducers';
const rootreducer = combineReducers({
  cart: cartReducer,
  signup: signupReducer,
  login: loginReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
const createcomposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootreducer,
  createcomposer(applyMiddleware(thunk))
);
