import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";

const FhirChoice = ({question}) => {
    const [valueSet, setValueSet] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const avs = await axios.get(question.answerValueSet, {
                    headers: {
                        Accept: "application/json+fhir",
                    },
                });
                // the values we want are actually in the CodeSystem.....................
                console.info(question.answerValueSet, avs.data);
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
        return <div>Loading valueSet...</div>;
    }

    if (valueSet && valueSet.expansion) {
        return (
            <div>
                <div>
                    <label>{question.text}</label>
                </div>
                <div>
                    <select>
                        {
                            valueSet.expansion.contains.map(x => {
                                return <option key={x.code} value={x.code}>{x.display}</option>
                            })
                        }
                    </select>
                    <pre className="debug-valueset">{JSON.stringify(valueSet)}</pre>
                    <pre>{JSON.stringify(question, null, 2)}</pre>
                </div>
            </div>
        );
    }
    // else
    return (
        <div>
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
