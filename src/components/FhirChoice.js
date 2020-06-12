import React, { useState, useEffect } from "react";
import axios from "axios"

const FhirText = ({ question }) => {
    const [valueSet, setValueSet] = useState([]);

    useEffect(async () => {
        const avs = await axios.get(question.answerValueSet, {
            headers: {
                "Accept": "application/json+fhir"
            }
        });
        debugger;
    }, []);
    return (
        <>
            <div>
                <label>{question.text}</label>
            </div>
            <div>
                <select></select>
                <pre>{JSON.stringify(question, null, 2)}</pre>
            </div>
        </>
    );
};

export default FhirText;
