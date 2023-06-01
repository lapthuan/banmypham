import axios from "axios"
import {
    BLOG_GET_ALL_FAILURES,
    BLOG_GET_ALL_REQUEST,
    BLOG_GET_ALL_SUCCESS,
    BLOG_GET_DETAIL_FAILURE,
    BLOG_GET_DETAIL_REQUEST,
    BLOG_GET_DETAIL_SUCCESS
} from "../const/blogConstants"

const api = axios.create(
    {
        baseURL: "https://api-thuongmai.vercel.app",
    }
)

export const blogGetAll = () =>
    async (dispatch) => {
        dispatch({ type: BLOG_GET_ALL_REQUEST })
        try {
            const { data } = await api.get(`/api/blog`)
            console.log(data);
            dispatch({ type: BLOG_GET_ALL_SUCCESS, payload: data })

        } catch (error) {

        }

    }