import { REGISTER_USER, LOGIN_USER } from "../actionType";
import { CREATE_POST, SHOW_POST, SHOW_ERROR, UPDATE_POST,DELETE_POST } from "../actionType";
import axios from "axios";

export const registeruser = (data) => {
  const api = "https://react-rails-api-demo.herokuapp.com/api/v1/signup";
  return (dispatch) => {
    axios
      .post(api, {
        user: {
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        },
      })
      .then((responce) => {
        dispatch({
          type: REGISTER_USER,
          payload: responce,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_ERROR,
          payload: error,
        });
      });
  };
};


export const loginuser = (data) => {
  const api = "https://react-rails-api-demo.herokuapp.com/api/v1/signin";
  return (dispatch) => {
    axios
      .post(api, {
        user: {
          email: data.email,
          password: data.password,
        },
      })
      .then((responce) => {
        localStorage.setItem("Token", responce.data.token);
        localStorage.setItem("Id", JSON.stringify(responce.data.user.id));

        dispatch({
          type: LOGIN_USER,
          payload: responce,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_ERROR,
          payload: error,
        });
      });
  };
};


export const showpost = () => {
  const token = localStorage.getItem("Token");
    const headers= {
      "Content-Type": "application/json",
      "Authorization": token,
    };

  return (dispatch) => {
    axios
      .get(
        "https://react-rails-api-demo.herokuapp.com/api/v1/posts",
        {headers:headers}
      )
      .then((responce) => {
        // console.log("show res", responce);
        dispatch({
          type: SHOW_POST,
          payload: responce.data
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_ERROR,
          payload: error
        });
      });
  };
};



export const createpost = (data) => {
    console.log('1111', data)
  const token = localStorage.getItem("Token");
  const id = localStorage.getItem("Id");

  let headers = {
      "Content-Type": "application/json",
      "Authorization": token,
  };
  const api = "https://react-rails-api-demo.herokuapp.com/api/v1/posts";
  const body = {
    post: {
      "title": data.title,
      "description": data.description,
      "user_id":id,
    },
  };
  return (dispatch) => {
    axios
      .post(api,body, {
        headers: headers
      })
      .then((responce) => {
        console.log("createapiresponce", responce);
        dispatch({
          type: CREATE_POST,
          payload: responce,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_ERROR,
          payload: error,
        });
      });
  };
};


export const deletepost = (id) => {
const token = localStorage.getItem("Token");
let headers = {
    "Content-Type": "application/json",
    "Authorization": token,
};

const api = `https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`;
return (dispatch) => {
  axios
    .delete(api, {
      headers: headers
    })
    .then((responce) => {
      console.log("deleteapiresponce", responce);
      dispatch({
        type: DELETE_POST,
        payload: responce,
      });
    })
    .catch((error) => {
      dispatch({
        type: SHOW_ERROR,
        payload: error,
      });
    });
};
};


export const updatepost1 = (id, title, description) => {
  const token = localStorage.getItem("Token");
  
  let headers = {
      "Content-Type": "application/json",
      "Authorization": token,
  };
  const api = `https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`;

  const body = {
    post: {
      "title": title,
      "description": description,
    },
  };
  
  return (dispatch) => {
    axios
      .put(api, body, {
        headers: headers
      })
      .then((responce) => {
        console.log("updateapiresponce", responce);
        dispatch({
          type: UPDATE_POST,
          payload: responce,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_ERROR,
          payload: error,
        });
      });
  };
  };
  