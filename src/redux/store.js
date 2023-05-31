import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducers/auth";
import { signupReducer } from "./signup/signup.reducer";
import { productListReducer ,productDetailsReducer,productFindReducer} from "./reducers/productReducers";
import { categoryListReducer,categoryDetailsReducer } from "./reducers/categoryReducers";
import { brandListReducer,brandDetailsReducer } from "./reducers/brandReducers";
import { cartReducer } from './reducers/cartReducers';
import { orderReducer , getOrderReducer,getMoneyReducer} from './reducers/orderReducers';
import { reviewAddReducer,reviewGetReducer } from './reducers/reviewReducers';

const rootreducer = combineReducers({
  cart: cartReducer,
  signup: signupReducer,
  login: loginReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productFind: productFindReducer,
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
  brandList: brandListReducer,
  brandDetails: brandDetailsReducer,
  orderCreate: orderReducer,
  orderGetAll : getOrderReducer,
  orderGetMoney: getMoneyReducer,
  reviewadd : reviewAddReducer,
  reviewGet : reviewGetReducer,
});
const createcomposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootreducer,
  createcomposer(applyMiddleware(thunk))
);
