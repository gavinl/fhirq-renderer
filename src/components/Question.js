import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import FhirText from "./FhirText";
import FhirChoice from "./FhirChoice";

import "./Question.scss";

const Question = (props) => {
    const question = props.item;
    useEffect(() => console.log(question.type));

    switch (question.type) {
        case "text":
            return <FhirText question={question} />;

        case "choice":
            return <FhirChoice question={question} />;
        default:
            return <pre>{JSON.stringify(question, null, 2)}</pre>;
    }
};

Question.propTypes = {
    item: PropTypes.object.isRequired,
};
export default Question;
