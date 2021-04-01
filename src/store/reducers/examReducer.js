const initState = {
  exam: [40, 100],
};

const examReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_EXAM":
      console.log("created exam", action.score);
      return state;
    case "CREATE_EXAM_ERROR":
      console.log("create exam error", action.err);
      return state;
    default:
      return state;
  }
};

export default examReducer;
