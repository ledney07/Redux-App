import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddActivity = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    duration: "",
  });

  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const addActivity = () => {
    dispatch({
      type: "CREATE_Activity",
      payload: {
        id: data.id,
        name: data.name,
        duration: data.duration,
      },
    });
  };

  console.log(data);
  return (
    <div className="add">
      <div className="input-section">
        <p>Activity:</p>
        <input
          onChange={(e) => handleChange(e)}
          name={"name"}
          placeholder={"Activity Name..."}
        />
      </div>

      <div className="input-section">
        <p>Duration:</p>
        <input
          onChange={(e) => handleChange(e)}
          name={"duration"}
          placeholder={"Activity Name..."}
        />
      </div>
      <button onClick={addActivity}>Add</button>
    </div>
  );
};

export default AddActivity;
