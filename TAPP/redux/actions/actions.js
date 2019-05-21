import { SAVE_DATA_DEV } from "./types";
export const save_data_dev = (dataField, data) => ({
  type: SAVE_DATA_DEV,
  dataField,
  data
});
