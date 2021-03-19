import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


import UpdateNote from "./UpdateNote";
import DeleteNote from './DeleteNote'

function GetNotes() {
  const [notes, setNotes] = useState([]);

  const [open, setOpen] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const fetchNote = async () => {
    await axios
      .get("http://localhost:5000/get-notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log("Error Loading the Notes");
      });
  }

  const closeDialog = () => {
    setOpen(null);
    fetchNote()
  };

  useEffect(() => {
    
    fetchNote()
    
  },[]);

  useEffect(() =>{
    console.log(notes) 
  },[notes])

  return (
    <>
      <h1>All Notes</h1>

      {/* checking */}
      {/* {console.log(notes)} */}

      
        {/* array of JSX items */}
        
        {notes.map(note => (
        <div key={note.id}>
          <h4>{note.title}</h4>
          <h4>{note.description}</h4>
          <button onClick={handleClickOpen}>Edit</button>
          <UpdateNote propopen={open} propclose={closeDialog} noteTitle={note.title} noteDesc={note.description} />
        </div>
      ))
      }
      

      <div>
        
        
        {/* <DeleteNote noteTitle={note.title}/> */}
        {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Update Note"}</DialogTitle>
        <DialogContent>
          <UpdateNote />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
        
      </Dialog> */}
      </div>
    </>
  );
}

export default GetNotes;
