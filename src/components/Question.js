import React from "react";
import PropTypes from "prop-types";
import FhirText from "./FhirText";
import FhirChoice from "./FhirChoice";

const Question = (props) => {
  const question = props.item;

  switch (question.type) {
    case "text":
      return (
        <div className="row">
          <FhirText question={question} />
        </div>
      );

    case "choice":
      return (
        <div className="row">
          <FhirChoice question={question} />
        </div>
      );

    default:
      return (
        <div className="card">
          <div className="card-header alert alert-danger">
            <span className="type">{question.type}</span>{" "}
            <span className="link-id">{question["linkId"]}</span>
          </div>
          <div className="card-body">
            <pre className="raw">{JSON.stringify(question, null, 2)}</pre>
          </div>
        </div>
      );
  }
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Question;
