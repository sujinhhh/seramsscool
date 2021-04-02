const initState = {
  projects: [
    { id: 1, title: "help me", content: "programmer" },
    { id: 2, title: "It's meetin night", content: "정신차려" },
    { id: 3, title: "제발", content: "programmer" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
