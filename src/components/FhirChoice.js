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
        <div>
            <label htmlFor={question.linkId} className="form-label">
                {label}
            </label>
            <select className="form-control" required={question.required || false} id={question.linkId}>
				{valueSet.map(vs => <option key={vs.valueCoding.code} value={vs.valueCoding.code}>{vs.valueCoding.display}</option>)}
            </select>
            <pre>{JSON.stringify(question, null, 2)}</pre>
        </div>
    );

    // 	if (valueSet.expansion) {
    // 		return (
    // 			<div>
    // 				<div>
    // 					<label>{label}</label>
    // 				</div>
    // 				<div>
    // 					<select>
    // 						<option selected disabled>
    // 							Choose...
    // 						</option>
    // 						{/* TODO: 👆 define/use extension for display text */}
    // 						{valueSet.expansion.contains.map((x) => {
    // 							return (
    // 								<option key={x.code} value={x.code}>
    // 									{x.display}
    // 								</option>
    // 							);
    // 						})}
    // 					</select>
    // 				</div>
    // 			</div>
    // 		);
    // 	}
    // 	// else
    // 	return (
    // 		<div className="unhandled-valueset">
    // 			<div>
    // 				<label>{label}</label>
    // 			</div>
    // 			<div>
    // 				<pre>{JSON.stringify(question, null, 2)}</pre>
    // 			</div>
    // 		</div>
    // 	);
    // }
    // return (
    // 	<div>
    // 		<div className="form-label">
    // 			{label}
    // 		</div>
    // 		<pre>{JSON.stringify(2, null, question)}</pre>
    // 	</div>
    // );
};

FhirChoice.propTypes = {
    question: PropTypes.object.isRequired,
};
export default FhirChoice;
