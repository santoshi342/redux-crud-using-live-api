import {
  REGISTER_USER,
  LOGIN_USER,
  SHOW_POST,
  CREATE_POST,
  SHOW_ERROR,
  UPDATE_POST,
  DELETE_POST
} from "../actionType";

const initialState = {
  data: [],
  deletResponse:[],
  showError:[],
  showPost:[],
  updatePost:[],
  createPost:[],

};


const UserReducer = (state = initialState, action) => {
  console.log('actiontype', action.type);
  console.log('action payload', action.payload);
  console.log('action error', action.error)
  
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        data: action.payload,
      };
      break;
    case LOGIN_USER:
      return {
        ...state,
        data: action.payload,
        showError:action.error
      };
      break;
    case SHOW_POST:
      return {
        ...state,
        data: action.payload,
        deletResponse:[],
        showError:[]
      };
      break;
    case CREATE_POST:
      return {
        ...state,
        createPost: action.payload,
      };
      break;
    case SHOW_ERROR:
      return {
        ...state,
        showError: action.payload,
      };
      break;
      case UPDATE_POST:
        return {
          ...state,
          updatePost:action.payload,
        }
        break;
        case DELETE_POST:
          return {
            ...state,
            deletResponse:action.payload,
          }
          break;
    default:
      return state;
  }
};

export default UserReducer;
