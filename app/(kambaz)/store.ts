import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/reducer";
import modulesReducer from "./courses/[cid]/modules/reducer";
import accountReducer from "./account/reducer";
import assignmentReducer from "./courses/[cid]/assignments/reducer";
import enrollmentReducer from "./dashboard/reducer";
import folderReducer from "./courses/[cid]/pazza/folderReducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollmentReducer,
    folderReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
