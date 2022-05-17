import { createSlice } from "@reduxjs/toolkit";

export const maileSlice = createSlice({
  name: "mail",
  initialState: { SendMessageIsOpen: false,selectmail:null },
  reducers: {
    SelectMils:(state,action)=>{
      state.selectmail=action.payload
    },
    openSendMessage: (state) => {
      state.SendMessageIsOpen = true;
    },
    CloseSendMessage: (state) => {
      state.SendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, CloseSendMessage,SelectMils } = maileSlice.actions;

export const selectMail = (state) => state.mail.SendMessageIsOpen;
export const selectM = (state) => state.mail.selectmail;

export default maileSlice.reducer;
