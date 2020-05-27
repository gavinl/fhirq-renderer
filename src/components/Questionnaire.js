import React from "react";
import PropTypes from "prop-types";
import Group from "./Group";
import Question from "./Question";

const Questionnaire = ({ questionnaire }) => {
  return (
    <>
      <h1>{questionnaire.title}</h1>
      <small>
        {`Id: ${questionnaire.id} ver ${
          questionnaire.meta.versionId
        } last updated ${new Date(
          questionnaire.meta.lastUpdated
        ).toLocaleString()}`}
      </small>
      <ul>
        {questionnaire.item.map((i) => {
          switch (i.type) {
            case "group":
              return (
                <li>
                  <Group item={i} />
                </li>
              );
            default:
              return (
                <li>
                  <Question item={i} />
                </li>
              );
          }
        })}
      </ul>
    </>
  );
};

Questionnaire.propTypes = {
  questionnaire: PropTypes.object.isRequired,
};

export default Questionnaire;
