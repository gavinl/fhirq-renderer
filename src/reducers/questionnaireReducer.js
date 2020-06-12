export const actionTypes = {
    setAnswer: "SET_ANSWER",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.setAnswer:
            console.log(action);
            return state;

        default:
            return state;
    }
};
