import {
  LOGIN_GET_ERROR,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_LOADING,
  LOGOUT_GET,
  BLOCK_USER_REQUEST,
  BLOCK_USER_SUCCESS,
  BLOCK_USER_FAILURE,
  UPDATE_GET_SUCCESS,
} from "../const/actionsTypes";

let local = localStorage.getItem("userrole");
console.log(local);

var checkAdminAuth = false;
if (local == "admin") {
  checkAdminAuth = true;
}
var checkSellerAuth = false;
if (local == "seller") {
  checkSellerAuth = true;
}

let initialstate = {
  isauth: false,
  isloading: false,
  iserror: false,
  token: "",
  user: {},
  AdminIsAuth: checkAdminAuth,
  SellerIsAuth: checkSellerAuth,
};

export const loginReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOGIN_GET_LOADING: {
      return {
        ...state,
        isloading: true,
        iserror: false,
      };
    }
    case LOGIN_GET_SUCCESS: {

      localStorage.setItem("user_infos", JSON.stringify(payload));
      localStorage.setItem("token", payload.token);
      localStorage.setItem("userid", payload._id);
      localStorage.setItem("userfirstname", payload.firstname);
      localStorage.setItem("username", payload.lastname);
      localStorage.setItem("useremail", payload.email);
      localStorage.setItem("usermobile", payload.mobile);
      localStorage.setItem("usercreatedAt", payload.createdAt);
      localStorage.setItem("userAddress", payload.address ? JSON.stringify(payload.address) : "");
      localStorage.setItem("userimage", payload.picture ? payload.picture : "");

      return {
        ...state,
        isloading: false,
        iserror: false,
        token: payload.token,
        isauth: true,
        user: payload,
        AdminIsAuth: payload.role == "admin",
        SellerIsAuth: payload.role == "seller",
      };
    }

    case LOGIN_GET_ERROR: {
      return {
        ...state,
        isloading: false,
        iserror: true,
      };
    }
    case LOGOUT_GET: {
      localStorage.removeItem("total");
      localStorage.removeItem("shipping");
      localStorage.removeItem("userAddress");
      localStorage.removeItem("userfirstname");
      localStorage.removeItem("userimage");
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
      localStorage.removeItem("user_infos");
      localStorage.removeItem("username");
      localStorage.removeItem("useremail");
      localStorage.removeItem("usercreatedAt");
      localStorage.removeItem("usermobile");
      localStorage.removeItem("cartItems");
      return {
        ...initialstate,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  isLoading: false, // Trạng thái loading ban đầu
  isBlocked: false, // Trạng thái block ban đầu
  error: null // Lỗi ban đầu
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOCK_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case BLOCK_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isBlocked: true,
        error: null
      };
    case BLOCK_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isBlocked: false,
        error: action.payload // Cập nhật thông tin lỗi từ action payload
      };
    default:
      return state;
  }
};