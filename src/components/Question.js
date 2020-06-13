import React from "react";
import PropTypes from "prop-types";
import FhirText from "./FhirText";
import FhirChoice from "./FhirChoice";

import "./Question.scss";

const Question = (props) => {
  const question = props.item;

  switch (question.type) {
    case "text":
      return <FhirText question={question} />;

    case "choice":
      return <FhirChoice question={question} />;

    default:
      return (
        <code className="unhandled-question-type">
          {JSON.stringify(question, null, 2)}
        </code>
      );
  }
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Question;
