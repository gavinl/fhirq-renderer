import data from "../resx/questionnaire/ew.json";
import Questionnaire from "./Questionnaire";
import React from "react";

const QuestionnaireContainer = () => {
  return (
    <>
      <Questionnaire questionnaire={data} />
      <hr />
      <h1>Questionnaire data</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
};

export default QuestionnaireContainer;
