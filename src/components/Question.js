import React from "react";
import PropTypes from "prop-types";
import FhirText from "./FhirText";
import FhirChoice from "./FhirChoice";

import "./Question.scss";

const Question = (props) => {
    const question = props.item;

    switch (question.type) {
        case "text":
            return <FhirText question={question}/>;

        case "choice":
            return <FhirChoice question={question}/>;

        default:
            return (
                <div className="unhandled-question-type">
                  <h3>{question.type} <span className="question-link-id">{question["linkId"]}</span></h3>
                    <pre>
                        {JSON.stringify(question, null, 2)}
                    </pre>
                </div>
            );
    }
};

Question.propTypes = {
    item: PropTypes.object.isRequired,
};
export default Question;
