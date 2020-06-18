import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const FhirText = ({ question }) => {
  const [valueSet, setValueSet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        console.group("choice", question);
        if (question.answerValueSet) {
          console.log(`fetching ${question.answerValueSet}`);
          const avs = await axios.get(question.answerValueSet, {
            headers: {
              Accept: "application/json+fhir",
            },
          });
          // the values we want are actually in the CodeSystem.....................
          console.log("got avs", avs);
          // <pre> them out for now
          setValueSet(avs.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        console.groupEnd();
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading valueSet!</div>;
  }

  return (
    <div>
      <div>
        <label>{question.text}</label>
      </div>
      <div>
        <select>
          <option>Select...</option>
          {valueSet.map((vs) => {
            console.log(vs);
          })}
        </select>
        <pre className="debug-valueset">{JSON.stringify(valueSet)}</pre>
        <pre>{JSON.stringify(question, null, 2)}</pre>
      </div>
    </div>
  );
};

FhirText.propTypes = {
  question: PropTypes.object.isRequired,
};
export default FhirText;
