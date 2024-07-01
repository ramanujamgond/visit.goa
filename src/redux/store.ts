import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
// import todoReducer from "./reducers/todo-slice";
import cartReducer from "./reducers/cartslice";

// Create persist configurations for each reducer if needed
// const todoPersistConfig = {
//   key: "todo",
//   storage: storageSession,
// };

const cartPersistConfig = {
  key: "cart",
  storage: storageSession,
};

// Persist each reducer separately
// const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

// Combine reducers
const rootReducer = combineReducers({
  cart: persistedCartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
