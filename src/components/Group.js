import React, { useEffect } from "react";
import Question from "./Question";

const Group = ({ item }) => {
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <h3>{item.text}</h3>
        {item.item.map((i) => {
          switch (i.type) {
            case "group":
              return <Group key={i.itemId} item={i} />;
            default:
              return <Question key={i.itemId} item={i} />;
          }
        })}
      </div>
    </>
  );
};

export default Group;
