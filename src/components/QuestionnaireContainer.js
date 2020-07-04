import data from "../resx/questionnaire/mbs715.json";
import Questionnaire from "./Questionnaire";
import React from "react";

const QuestionnaireContainer = () => {
  return <Questionnaire questionnaire={data} />;
};

export default QuestionnaireContainer;
