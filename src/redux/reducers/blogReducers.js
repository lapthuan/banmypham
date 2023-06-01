import {
    BLOG_GET_ALL_FAILURES,
    BLOG_GET_ALL_REQUEST,
    BLOG_GET_ALL_SUCCESS,
    BLOG_GET_DETAIL_FAILURE,
    BLOG_GET_DETAIL_REQUEST,
    BLOG_GET_DETAIL_SUCCESS
} from "../const/blogConstants"

export const blogListReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case BLOG_GET_ALL_REQUEST:
            return { loading: true, blogs: [] };

        case BLOG_GET_ALL_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,
            };

        case BLOG_GET_ALL_FAILURES:
            return { loading: false, error: action.payload };

        default:
            return { ...state };
    }
};
