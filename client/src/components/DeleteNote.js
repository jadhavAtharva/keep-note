// replace
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function DeleteNote({noteTitle}){
  const [title, setTitle] = useState("")
  // const [description, setDescription] = useState(noteDesc)
 
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(propopen);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    setTitle(noteTitle);

    const data = {
      'title' : title,
      // 'description' : description
  }
  console.log(data);
  
  //axios post
  axios
    .post('localhost:5000/delete-note', data)
    .then(res => {
      // this.props.history.push('/');
      // setOpen(false);
    })
    .catch(err => {
      console.log("Error in Creating Note!");
  })  
  })  

  
  // function handleTitleChange(e){
  //   setTitle(e.target.value);
  // }

  // function handleDescChange(e){
  //   setDescription(e.target.value);
  // }

  const submitValue = () => {
    const data = {
        'title' : title,
        // 'description' : description
    }
    console.log(data);
    
    //axios post
    axios
      .post('localhost:5000/delete-note', data)
      .then(res => {
        // this.props.history.push('/');
        // setOpen(false);
      })
      .catch(err => {
        console.log("Error in Creating Note!");
    })  

    
  }

  return(
    <>
      <h1>Delete</h1>

      {/* <Dialog
        open={propopen}
        onClose={propclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Update Note"}</DialogTitle>
        <DialogContent>
                

                <p>Are you sure?</p>

                

                <button onClick={submitValue}>Update</button>
        </DialogContent>
        
        
      </Dialog> */}

      {/* <form> */}
                {/* <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Body'
                    name='body'
                    className='form-control'
                    value={description}
                    onChange={handleDescChange}
                  />
                </div>

                <button onClick={submitValue}>Update</button> */}
    {/* </form> */}
    </>
  )
}

export default DeleteNote;