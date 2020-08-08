import React from "react";
import PropTypes from "prop-types";
import FhirText from "./FhirText";
import FhirChoice from "./FhirChoice";

const Question = (props) => {
  const question = props.item;

  let component = null;
  switch (question.type) {
    case "text":
      component = (
        <div className="row">
          <FhirText question={question} />
        </div>
      );
      break;

    case "choice":
      component = (
        <div className="row">
          <FhirChoice question={question} />
        </div>
      );
      break;

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

  return (
    <div className="card" key={question.linkId}>
      <div className="card-header" title={`Id ${question.linkId}`}>{question.text || question.linkId}</div>
      <div className="card-body">
        {component}
      </div>
    </div>
  );
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Question;
