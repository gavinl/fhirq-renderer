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
        <div className="unhandled-question">
          <div className="header">
            <span className="type">{question.type}</span>{" "}
            <span className="link-id">{question["linkId"]}</span>
          </div>
          <pre className="raw">{JSON.stringify(question, null, 2)}</pre>
        </div>
      );
  }
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Question;
