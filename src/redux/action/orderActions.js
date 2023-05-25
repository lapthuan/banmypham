import axios from "axios";
import {
    CREATE_ODER_FAILURE,
    CREATE_ODER_REQUEST,
    CREATE_ODER_SUCCESS,
    CREATE_ODER_RESET,
    CATEGORY_LIST_FAILURE,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    GET_ODER_FAILURE,
    GET_ODER_SUCCESS
} from "../const/orderConstants"

const api = axios.create({
    baseURL: "https://api-thuongmai.vercel.app",
});

export const createOrder = (cartItems, payment, shipping, userId, totalprice) =>
    async (dispatch) => {
        dispatch({ type: CREATE_ODER_FAILURE });
        try {
            api.post("/api/users/createorder",
                {
                    cart: cartItems,
                    shipping: shipping,
                    payment: payment,
                    totalprice: totalprice,
                    iduser: userId
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
export const getOrderByIdUser = (Id) =>
    async (dispatch) => {
        dispatch({type : GET_ODER_FAILURE})
        try {
            api.post("/api/users/findorder",{
                iduser: Id
            }).then((response)=>{
                dispatch({type : GET_ODER_SUCCESS , payload: response.data})
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