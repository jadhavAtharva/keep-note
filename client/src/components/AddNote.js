import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddNote(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  function handleTitleChange(e){
    setTitle(e.target.value);
  }

  function handleDescChange(e){
    setDescription(e.target.value);
  }

  const submitValue = () => {
    const data = {
        'title' : title,
        'description' : description
    }
    console.log(data);

    //axios post
    axios
      .post('localhost:5000/add_note', data)
      .then(res => {
        setTitle("");
        setDescription("");
        // this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in Creating Note!");
    })
}

  return(
    <>
    
    <h1>
      AddNote
    </h1>

    {/* <form> */}
                <div className='form-group'>
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

                <button onClick={submitValue}>Submit</button>
    {/* </form> */}
    
    </>
  )
}


export default AddNote;