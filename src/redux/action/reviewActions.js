import axios from 'axios';
import { toast } from 'react-toastify';
import {
    REVIEW_ADD_FAILURE,
    REVIEW_ADD_REQUEST,
    REVIEW_ADD_SUCCESS,
    REVIEW_GET_FAILURE,
    REVIEW_GET_REQUEST,
    REVIEW_GET_SUCCESS,
} from '../const/reviewConstants';

const api = axios.create({
    baseURL: "https://api-thuongmai.vercel.app",
    // baseURL: "http://localhost:5000",
});


export const addReview = (product, userid, rate, title, review) =>
    async (dispatch) => {
        dispatch({ type: REVIEW_ADD_REQUEST })
        try {
            await api.post(`api/review/add`,
                {
                    product: product,
                    user: userid,
                    title: title,
                    rating: rate,
                    review: review,
                }
            ).then((response) => {

                if (response.data.success == true) {
                    api.get(`api/review/inproducs?idproduct=${product}&page=1&limit=5`).then((response) => {
                        console.log(response);
                        dispatch({ type: REVIEW_GET_SUCCESS, payload: response.data })

                    })

                    toast.success("Đánh giá của bạn đã được gửi")
                } else {
                    toast.warning("Bạn đã đánh giá sản phẩm này")
                }
            })

        } catch (error) {
            dispatch({
                type: REVIEW_ADD_FAILURE,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }

    }

export const reviewInProduct = (product) =>
    async (dispatch) => {
        dispatch({ type: REVIEW_GET_REQUEST })
        try {
            await api.get(`api/review/inproducs?idproduct=${product}&page=1&limit=20`).then((response) => {
                console.log(response);
                dispatch({ type: REVIEW_GET_SUCCESS, payload: response.data })

            })

        } catch (error) {
            dispatch({
                type: REVIEW_GET_FAILURE,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }

    }