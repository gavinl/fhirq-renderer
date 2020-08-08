import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";

const Group = ({ item }) =>
  item.item.map((i) => {
    switch (i.type) {
      case "group":
        return <Group key={i.linkId} item={i} />;
      default:
        return (
          <div className="card">
            <div className="card-header" title={`Id ${item.linkId}`}>{item.text || item.linkId}</div>
            <div className="card-body">
              <Question key={i.linkId} item={i} />
            </div>
          </div>
        );
    }
  });


Group.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Group;
