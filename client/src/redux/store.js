import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import projectsReducer from "./slices/projectsSlice";
import tasksReducer from "./slices/tasksSlice";
import sprintsReducer from "./slices/sprintsSlice";
import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    sprints: sprintsReducer,
    users: usersReducer,
  },
});

export default store;
