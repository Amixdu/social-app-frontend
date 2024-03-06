import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/user-slice";
import { userApi } from "./services/users/user-api";
import { postApi } from "./services/posts/post-api";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({
  "feature/users": userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
});
export const makeStore = () => {
  const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([userApi.middleware, postApi.middleware]),
  });
  setupListeners(store.dispatch);
  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];