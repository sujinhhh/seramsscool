export const createExam = (score) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("exam")
      .add({
        ...score,
        name: "sujin",
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_EXAM" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_EXAM_ERROR" });
      });
  };
};
