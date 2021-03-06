import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { reducer, actionTypes } from "../reducers/questionnaireReducer";

const FhirChoice = ({ question }) => {
    const [valueSet, setValueSet] = useState([]);
    const [label, setLabel] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [answer, dispatch] = useReducer(reducer, "");

    
    if(question.enableWhen) {
        // TODO: multiple reducers? can we pack everything into a single?

        // 1) dispatch each enableWhen to state
        // 2) update SET_ANSWER to check list of enableWhen
        //      2.1) state separate to questionnaire is required
        // ........... do more research
        //debugger;
    }

    useEffect(() => {
        async function fetchData() {
            try {
                console.info(`fetching ${question.answerValueSet}...`);
                const avs = await axios.get(question.answerValueSet, {
                    headers: {
                        Accept: "application/json+fhir",
                    },
                });
                return avs.data;
            } catch (err) {
                console.error(err);
                return null;
            } finally {
                setIsLoading(false);
            }
        }

        setLabel(`${question.linkId}: ${question.text}`);
        if (question.answerValueSet) {
            const data = fetchData();
            setValueSet(data);
        } else if (question.answerOption) {
            setValueSet(question.answerOption);
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="form-group">
            <label htmlFor={question.linkId}>{label}</label>
            <select
                className="form-control"
                required={question.required}
                id={question.linkId}
                value={answer}
                onChange={(e) =>
                    dispatch({ type: actionTypes.setAnswer, payload: e.target.value })
                }
            >
                {valueSet.map((vs) => (
                    <option
                        key={vs.valueCoding.code}
                        value={vs.valueCoding.code}
                    >
                        {vs.valueCoding.display}
                    </option>
                ))}
            </select>
            <pre>{JSON.stringify(question, null, 2)}</pre>
        </div>
    );
};

FhirChoice.propTypes = {
    question: PropTypes.object.isRequired,
};
export default FhirChoice;
