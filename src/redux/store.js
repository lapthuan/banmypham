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
import { categoryListReducer } from "./reducers/categoryReducers";
import { categoryDetailsReducer } from "./reducers/categoryReducers";
import { brandListReducer } from "./reducers/brandReducers";
import { brandDetailsReducer } from "./reducers/brandReducers";
import { cartReducer } from './reducers/cartReducers';
import { orderReducer } from './reducers/orderReducers';

const rootreducer = combineReducers({
  cart: cartReducer,
  signup: signupReducer,
  login: loginReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
  brandList: brandListReducer,
  brandDetails: brandDetailsReducer,
  orderCreate: orderReducer,
});
const createcomposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootreducer,
  createcomposer(applyMiddleware(thunk))
);
