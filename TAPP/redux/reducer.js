import { SAVE_DATA_DEV } from "./actions/types";

const initialState = {
  options: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA_DEV: {
      // console.warn("dataField", action.dataField);
      // console.warn("data", action.data);
      return {
        ...state,
        options: {
          [action.dataField]: action.data
        }
      };
    }

    default:
      return state;
  }
};
