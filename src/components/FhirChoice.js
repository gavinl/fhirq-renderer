import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const FhirChoice = ({ question }) => {
    const [valueSet, setValueSet] = useState([]);
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
                setValueSet(avs.data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (valueSet && valueSet.expansion) {
        return (
            <div>
                <div>
                    <label>{question.text}</label>
                </div>
                <div>
                    <select>
                        <option selected disabled>Choose...</option>
                        { /* TODO: 👆 define/use extension for display text */ }
                        {
                            valueSet.expansion.contains.map(x => {
                                return <option key={x.code} value={x.code}>{x.display}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }
    // else
    return (
        <div className="weird-valueset">
            <div>
                <label>{question.text}</label>
            </div>
            <div>
                <pre>
                    {JSON.stringify(2, null, valueSet)}
                </pre>
            </div>
        </div>
    );
};

FhirChoice.propTypes = {
    question: PropTypes.object.isRequired,
};
export default FhirChoice;
