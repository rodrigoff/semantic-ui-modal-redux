import { combineReducers } from "redux";
import ModalReducer from "./modalReducer";

const rootReducer = combineReducers({
  modals: ModalReducer
});

export default rootReducer;
