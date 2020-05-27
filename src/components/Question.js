import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { actionTypes, reducer } from "../reducers/questionnaireReducer";

const Question = (props) => {
  const question = props.item;
  const [, dispatch] = useReducer(reducer, {
    questionnaire: question,
    questions: [],
  });

  useEffect(() => {
    dispatch({ type: actionTypes.registerQuestion, payload: question });
  }, [question]);

  return <pre>{JSON.stringify(question)}</pre>;
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Question;
