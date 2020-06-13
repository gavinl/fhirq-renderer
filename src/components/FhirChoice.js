import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const FhirText = ({ question }) => {
  const [valueSet, setValueSet] = useState([]);

  useEffect(async () => {
    try {
      const avs = await axios.get(question.answerValueSet, {
        headers: {
          Accept: "application/json+fhir",
        },
      });
      // the values we want are actually in the CodeSystem.....................

      // <pre> them out for now
      setValueSet(avs.data);
    } catch (err) {
      console.error(
        `unable to grab question.answerValueSet ${question.answerValueSet}`,
        err
      );
    }
  }, []);
  return (
    <div>
      <div>
        <label>{question.text}</label>
      </div>
      <div>
        <select></select>
        <pre className="debug-valueset">
          {JSON.stringify(valueSet, null, 2)}
        </pre>
        <pre>{JSON.stringify(question, null, 2)}</pre>
      </div>
    </div>
  );
};

FhirText.propTypes = {
  question: PropTypes.object.isRequired,
};
export default FhirText;
