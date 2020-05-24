import React, {useEffect} from "react";

const Questionnaire = ({questionnaire}) => {


    useEffect(() => {
        console.log(questionnaire);
    }, [questionnaire])

    return  (
        <>
            <h1>{questionnaire.title}</h1>
            <h2>{JSON.stringify(questionnaire.meta)}</h2>
            <ul>
                {questionnaire.item.map(i => {
                    return (<li key={i.linkId}>
                        <div>{i.type}</div>
                        <div>{i.linkId}</div>
                        <div>{JSON.stringify(i)}</div>
                    </li>)
                })}
            </ul>
            </>);

}

export default Questionnaire;
