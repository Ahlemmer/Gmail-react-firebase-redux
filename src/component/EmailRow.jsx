import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import React from "react";
import "./EmailRow.css";

import { useDispatch, useSelector } from "react-redux";
import { selectM, SelectMils } from "../features/MailSlice";
import { useNavigate } from "react-router-dom";


function EmailRow({ id, title, subject, descrption, time }) {
  const history = useNavigate();
  const dispatch=useDispatch()
  const openemail=()=>{


    dispatch(SelectMils({
      id, title, subject, descrption, time 

    }))
  
    history('/mail')

  }
  
  return (
    <div className="EmailRow" onClick={openemail}>
      <div className="emailrow_options">
      
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailrow_title">{title}</h3>
      <div className="emailrow_message">
        <h4>
          {subject} <span className="emailrow_descripton">-{descrption}</span>
        </h4>
      </div>
      <div className="emailrow_time">{time}</div>
    </div>
  );
}

export default EmailRow;
