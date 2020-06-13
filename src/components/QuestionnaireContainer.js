import q from "../resx/questionnaire/mbs715.json";
import Questionnaire from "./Questionnaire";
import React from "react";

const QuestionnaireContainer = () => {
  return <Questionnaire questionnaire={q} />;
};

export default QuestionnaireContainer;
