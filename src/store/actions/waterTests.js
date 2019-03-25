import {
  ADD_WATER_TEST,
  EDIT_WATER_TEST,
  DELETE_WATER_TEST
} from "../constants";

export const addWaterTest = testData => {
  return (dispatch, setState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("tests")
      .add({
        ...testData
      })
      .then(() => {
        dispatch({
          type: ADD_WATER_TEST,
          testData
        });
      })
      .catch(err => console.error(err));
  };
};
