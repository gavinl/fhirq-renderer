import React from "react";

const Question = ({ question }) => {
  return <pre>{JSON.stringify(question)}</pre>;
};

export default Question;
