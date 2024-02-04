import { createStore } from "redux";
import postApiReducer from "./reducers/postApiReducer";

const store  = createStore(postApiReducer);
export default store;