import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";

const Group = ({ item }) =>
  item.item.map((i) => {
    switch (i.type) {
      case "group":
        return <Group key={i.linkId} item={i} />;
      default:
        return <Question item={i} key={i.linkId} />;
    }
  });


Group.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Group;
