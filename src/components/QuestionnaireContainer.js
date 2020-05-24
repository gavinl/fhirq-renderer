import q from "../resx/questionnaire/cqfq.json"
import Questionnaire from "./Questionnaire";
import React from "react";

const QuestionnaireContainer = () => {
    return (
    <Questionnaire questionnaire={q}/>
    )
}

export default QuestionnaireContainer;