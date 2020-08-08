const actionTypes = {
  setAnswer: "SET_ANSWER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setAnswer:
      console.log(action);
      return state;

    default:
      return state;
  }
};

export default {
  questionnaireReducer: reducer,
  questionnaireActionTypes: actionTypes,
};
