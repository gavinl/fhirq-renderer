import React, { useEffect } from "react";
import Group from "./Group";
import Question from "./Question";

const Questionnaire = (props) => {
  const questionnaire = props.questionnaire; // TODO: fix
  useEffect(() => {
    console.log(questionnaire);
  }, [questionnaire]);

  return (
    <>
      <h1>{questionnaire.title}</h1>
      <h2>{JSON.stringify(questionnaire.meta)}</h2>
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
