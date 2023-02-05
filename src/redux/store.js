import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./cotactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});