import {
  ADD_WATER_TEST,
  EDIT_WATER_TEST,
  DELETE_WATER_TEST,
} from "../constants";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addWaterTest = testData => {
  return (dispatch, setState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .add({ collection: "tests" }, { ...testData })
      // .delete({ collection: "tests", doc: "23OBgmUn3H7wrw3dS2dK" })

      .then(() => {
        dispatch({
          type: ADD_WATER_TEST,
          testData,
        });
        const time = new Date().toLocaleTimeString();
        console.info(
          `${time} - Water test with date: ${testData.testDate}, added`
        );
        toast.success(`Water test with date: ${testData.testDate}, added`);
      })
      .catch(err => console.error(err));
  };
};

export const deleteWaterTest = testId => {
  return (dispatch, setState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .delete({ collection: "tests", doc: testId })
      .then(() => {
        // dispatch({
        //   type: DELETE_WATER_TEST,
        //   testId,
        // });
        toast.success(`Water test deleted`);
      })
      .catch(err => console.error(err));
  };
};
