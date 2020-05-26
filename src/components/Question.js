import React, { useReducer, useEffect } from "react";
import { actionTypes, reducer } from "../reducers/questionnaireReducer";

const Question = (props) => {
    const question = props.item;
    const [state, dispatch] = useReducer(reducer, {
        questionnaire: question,
        questions: [],
    });

    useEffect(() => {
        dispatch({ type: actionTypes.registerQuestion, payload: question });
    }, question);

    return <pre>{JSON.stringify(question)}</pre>;
};

export default Question;
