import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import FhirText from "./FhirText"
import { actionTypes, reducer } from "../reducers/questionnaireReducer";

const Question = (props) => {
    const question = props.item;
    useEffect(() => console.log(question.type))

    switch (question.type) {

        case "text":
            return <FhirText question={question} />
        default:
            return <code>{JSON.stringify(question, null, 2)}</code>
    }
};

Question.propTypes = {
    item: PropTypes.object.isRequired,
};
export default Question;
