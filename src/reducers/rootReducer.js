import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";

const rootRedeucer = combineReducers({
  activities: activitiesReducer,
});

export default rootRedeucer;
