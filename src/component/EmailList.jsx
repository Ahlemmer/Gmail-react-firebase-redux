import { ArrowDropDown, Subject } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./Firebase";
import { Outlet } from "react-router-dom";

function EmailList() {
  const [email,setemail]=useState([])
  
  useEffect(()=>{
    const database=collection(db,'emails')
    const q = query(database, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
     setemail (
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => unsub();
  },[])
  return (
    <div className="EmailList">
      <div className="emalist-setting">
        <div className="emailst-sittingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaillist-sittingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailst-section">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="primary" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>

      <div className="emailist_List">
      {email.map(({id,data:{message,Subject,timestamp,to}})=>{
            return(
               <EmailRow
              id={id}
              key={id}
              title={to}
              subject={Subject}
              descrption={message}
              time={new Date(timestamp?.seconds*1000).toUTCString()}
             
            />)

        })}
        <Outlet/>
     
      </div>
    </div>
  );
}

export default EmailList;
