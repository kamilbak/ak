import {
  ADD_WATER_TEST,
  EDIT_WATER_TEST,
  DELETE_WATER_TEST
} from "../constants";

const waterTests = (state = [], action) => {
  switch (action.type) {
    case ADD_WATER_TEST:
      console.log("reducer ADD_WATER_TEST", action);
      return [
        ...state,
        {
          id: action.id,
          testData: action.testData
        }
      ];
    default:
      return state;
  }
};

export default waterTests;
