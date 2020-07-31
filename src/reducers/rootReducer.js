const initState = {
  posts: [
    {
      id: "1",
      title: "John 17:14",
      body:
        "I have given your worl to them, but the world has hate them, because they are no part of the world just as I am no part of the world",
    },
    {
      id: "2",
      title: "Roman 5:12",
      body:
        "Through one man sin entered into the world and so death through spread to all men because they had all sined",
    },
    {
      id: "3",
      title: "Roman 7:21",
      body: "When I wish to do what is right, what is bad present with me",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
