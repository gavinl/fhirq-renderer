export const actionTypes = {
    setAnswer: "SET_ANSWER",
    registerQuestion: "REG_QUESTION",
    flushQuestions: "FLUSH_QUESTIONS",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.setAnswer:
            return state;

        case actionTypes.registerQuestion:
            console.log(action);
            return {
                ...state,
                // TODO: the idea is to have a dict of references
                // TODO: obviously this is not how to do that
                questions: [...state.questions, action.payload],
            };
        case actionTypes.flushQuestions: {
            return {
                ...state,
                questions: [],
            };
        }
        default:
            return state;
    }
};
