import React, { useEffect } from "react";
import Group from "./Group";
import Question from "./Question";

const Questionnaire = ({ questionnaire }) => {
  useEffect(() => {
    console.log(questionnaire);
  }, [questionnaire]);

  return (
    <>
      <h1>{questionnaire.title}</h1>
      <h5>
        {`Id: ${questionnaire.id} ver ${
          questionnaire.meta.versionId
        } last updated ${new Date(
          questionnaire.meta.lastUpdated
        ).toLocaleString()}`}
      </h5>
      <ul>
        {questionnaire.item.map((i) => {
          switch (i.type) {
            case "group":
              return (
                <li>
                  <Group item={i} />
                </li>
              );
            default:
              return (
                <li>
                  <Question item={i} />
                </li>
              );
          }
        })}
      </ul>
    </>
  );
};

export default Questionnaire;
