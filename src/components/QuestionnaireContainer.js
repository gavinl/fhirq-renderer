import q from "../resx/questionnaire/los.json"
import Questionnaire from "./Questionnaire";
import React from "react";

const QuestionnaireContainer = () => {
  return (
    <Questionnaire questionnaire={q} />
  )
}

export default QuestionnaireContainer;
