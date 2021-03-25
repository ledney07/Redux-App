import React from "react";
import { useDispatch } from "react-redux";

const Activity = (props) => {
  const dispatch = useDispatch();

  const deleteActivity = () => {
    dispatch({
      type: "DELETE_ACTIVITY",
      payload: { id: props.id },
    });
  };
  return (
    <div className={"activity-wrapper"}>
      <div className="activity-">
        <p>Activity:{props.name}</p>
      </div>
      <div>
        <p>Duration: {props.duration}</p>
      </div>
      <button onClick={deleteActivity}>Delete</button>
    </div>
  );
};

export default Activity;
