import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const FhirChoice = ({ question }) => {
    const [valueSet, setValueSet] = useState([]);
    const [label, setLabel] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
            <label htmlFor={question.linkId}>
                {label}
            </label>
            <select className="form-control" required={question.required} id={question.linkId}>
                {valueSet.map(vs =>
                    <option key={vs.valueCoding.code} value={vs.valueCoding.code}>{vs.valueCoding.display}</option>)
                }
            </select>
            <pre>{JSON.stringify(question, null, 2)}</pre>
        </div>
    );
};

FhirChoice.propTypes = {
    question: PropTypes.object.isRequired,
};
export default FhirChoice;
