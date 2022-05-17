import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import {useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { CloseSendMessage } from "../features/MailSlice";
import { addDoc, collection, Firestore, Timestamp } from "firebase/firestore";
import { db } from "./Firebase";

function SendMail() {
  const { register, formState: { errors }, handleSubmit } = useForm();
 const dispatch=useDispatch()

  const onSubmit=(data)=>{
  const collections=collection(db,'emails')
  
  addDoc(collections,{
    to:data.To,
    Subject:data.Subject,
    message:data.Message,
    timestamp:Timestamp.fromDate(new Date)

  })
  dispatch(CloseSendMessage())

  }
 
  return (
    <div className="SendMail">
      <div className="SendMail_header">
        <h3>New Message</h3>
        <CloseIcon onClick={()=>dispatch(CloseSendMessage())}  className="SendMail_Close"  />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input  type="email" placeholder="To" {...register("To", { required: true})}  />
        <p>{errors.To&&<p className="sendMail_error" >To is required</p>}</p>
       
    
        <input   name="subject" {...register('Subject', { required: true})} type="text" placeholder="Subject"   />
        <p>{errors.Subject&&<p className="sendMail_error">Subject is required</p>}</p>
      <input  {...register("Message", { required: true})} placeholder="Message"  className="sendmail_message"/>
      <p >{errors.Message&&<p className="sendMail_error">Message is required</p>}</p>
        
     
        <div className="SendMail_Option">
          <Button
            className="sendmail_btn"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
