import React from "react";
const FhirText = ({ question }) => {
    return (
        <>
            <div>
                <label>{question.text}</label>
            </div>
            <div>
                <textarea />
            </div>
        </>
    );
};

export default FhirText;
