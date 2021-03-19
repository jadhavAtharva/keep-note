import React from 'react';
import "./styles.css";
import AddNote from './components/AddNote'
import GetNotes from './components/GetNotes'

export default function App() {
  return (
    <div className="App">
      <AddNote />
      <GetNotes />
    </div>
  );
}
