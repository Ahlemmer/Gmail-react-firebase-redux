import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ErrorIcon from "@mui/icons-material/Error";
import { IconButton } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { useSelector } from "react-redux";
import { selectM } from "../features/MailSlice";
import { useNavigate } from "react-router-dom";

function Mail() {
  const History = useNavigate();
  const selectmail=useSelector(selectM);
  
 


  return (
    <div className="Mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => History("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mails_toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyhwader">
          <h2>{selectmail?.subject}</h2>
          <LabelImportantIcon className="mail_important" />
          <p>{selectmail?.title}</p>
          <p className="mail_time">{selectmail?.time} </p>
        </div>
        <div className="mail__message">
          <p>{selectmail?.descrption}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
