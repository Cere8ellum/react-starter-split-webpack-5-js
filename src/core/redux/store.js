import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { templateReducer } from "./reducers/templateReducer/templateReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
  temp: templateReducer,
});

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
      //loggerMiddleware,
    )
    //composeWithDevTools() // DevTools
  )
);
