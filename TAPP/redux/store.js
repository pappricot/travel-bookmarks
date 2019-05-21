import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

const store = createStore(
  combineReducers({
    main: reducer
  })
);

export default store;
