import { combineReducers } from "redux";
import suggestedusers from "./suggestedUsers";
import linksInfoWeb from "./footerReducer";

export default combineReducers({
  suggestedusers: suggestedusers,
  linksInfoWeb: linksInfoWeb,
});
