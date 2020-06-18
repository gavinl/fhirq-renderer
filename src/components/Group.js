import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Question from "./Question";

const Group = ({ item }) => {
  return (
    <>
      <div id={item.linkId} style={{ border: "1px solid black" }}>
        <h3 title={`Id ${item.linkId}`}>{item.text}</h3>
        {item.item.map((i) => {
          switch (i.type) {
            case "group":
              return <Group key={i.linkId} item={i} />;
            default:
              return <Question key={i.linkId} item={i} />;
          }
        })}
      </div>
    </>
  );
};

Group.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Group;
