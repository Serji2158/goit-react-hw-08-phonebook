import { combineReducers } from "redux";
import { contactsItemReducer } from "./Contacts/contactsReducer";
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
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/auth-reducer";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["user", "token"],
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootReducer = combineReducers({
  contacts: contactsItemReducer,
  authorization: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);
