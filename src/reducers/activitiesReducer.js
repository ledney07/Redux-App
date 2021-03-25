import uuid from "uuid/dist/v4";
const initalState = [
  {
    id: 1,
    name: "gym",
    duration: "1 hour",
  },
];

const activitiesReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_Activity":
      return [
        ...state,
        {
          id: uuid(),
          name: payload.name,
          duration: payload.duration,
        },
      ];
    case "DELETE_ACTIVITY":
      const copyState = [...state];
      //Find idof object to remove
      const i = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];

    default:
      return state;
  }
};
export default activitiesReducer;
