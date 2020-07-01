export const actionTypes = {
  setAnswer: "SET_ANSWER",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setAnswer:
      return state;

    default:
      return state;
  }
};
