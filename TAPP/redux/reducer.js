import { SAVE_DATA_DEV, SAVE_PIN } from "./actions/types";

const initialState = {
  options: {},
  pins: []
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
    case SAVE_PIN: {
      console.warn("data", action.data);
      return {
        ...state,
        pins: [...state.pins, action.data]
      };
    }

    default:
      return state;
  }
};
