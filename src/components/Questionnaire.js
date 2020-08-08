import React from "react";
import PropTypes from "prop-types";
import Group from "./Group";
import Question from "./Question";
import moment from "moment";

const Questionnaire = ({ questionnaire }) => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{questionnaire.title}</h1>
          <p className="lead">Last updated {moment(questionnaire.meta.lastUpdated).format("LLLL")}.</p>
        </div>
      </div>
      {questionnaire.item.map((i) => {
        switch (i.type) {
          case "group":
            return (
              <Group item={i} />
            );
          default:
            return (
              <Question item={i} />
            );
        }
      })}
    </div>
  );
};

Questionnaire.propTypes = {
  questionnaire: PropTypes.object.isRequired,
};

export default Questionnaire;
