import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/MailSlice";
import loginReducer from  "../features/Login-Slice"

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    login:loginReducer
    
  },
});
