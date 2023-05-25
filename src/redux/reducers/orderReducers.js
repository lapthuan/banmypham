import {
    CREATE_ODER_FAILURE,
    CREATE_ODER_REQUEST,
    CREATE_ODER_SUCCESS,
    CREATE_ODER_RESET

} from "../const/orderConstants"

let initialstate = {
    isloading: false,
    iserror: false,
    issuccess: false,
    order: []
};
export const orderReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_ODER_FAILURE:
            return {
                ...state,
                isloading: true,
                iserror: false,
                issuccess: false,

            };

        case CREATE_ODER_REQUEST:
            return {
                ...state,
                isloading: false,
                iserror: true,
                error: action.payload
            };

        case CREATE_ODER_SUCCESS:
            return {
                ...state,
                isloading: false,
                iserror: false,
                issuccess: true,

                order: action.payload
            };
        case CREATE_ODER_RESET:
            return {
                isloading: false,
                iserror: false,
                issuccess: false,
                order: []
            };
        default:
            return { ...state };
    }
}