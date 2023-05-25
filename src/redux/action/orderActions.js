import axios from "axios";
import {
    CREATE_ODER_FAILURE,
    CREATE_ODER_REQUEST,
    CREATE_ODER_SUCCESS,
    CREATE_ODER_RESET
} from "../const/orderConstants"

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createOrder = (cartItems, payment, shipping, userId,totalprice) =>
    async (dispatch) => {
        dispatch({ type: CREATE_ODER_FAILURE });
        try {
            api.post("/api/users/createorder",
                {
                    cart: cartItems,
                    shipping: shipping,
                    payment: payment,
                    totalprice : totalprice,
                    orderby: userId
                }).then((Response) => {
                  
                    dispatch({ type: CREATE_ODER_SUCCESS, payload: Response.data.newOrder })
                }).catch((error) => {
                    dispatch({ type: CREATE_ODER_REQUEST, payload: Response })
                    console.log('error :>> ', error);
                })

        } catch (error) {
            console.log(error);
        }
    }

export const resetOrder = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CREATE_ODER_RESET });
        } catch (error) {
            console.log(error);
        }
      
      
    }