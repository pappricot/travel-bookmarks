import { SAVE_DATA_DEV, SAVE_PIN } from "./types";
export const save_data_dev = (dataField, data) => ({
  type: SAVE_DATA_DEV,
  dataField,
  data
});
export const save_pin = address => ({
  type: SAVE_PIN,
  address
});
