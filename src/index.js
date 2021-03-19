var express = require('express')
const { set } = require('mongoose')
require('./db/mongoose')
const Note = require('./models/note')
const cors = require('cors');

const app = express()
const port = 5000

app.use(cors());
app.use(express.json())


app.post('/add_note', (req, res) => {
    const note = new Note(req.body)
    note.save().then(() =>{
        res.status(201).send(note)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

// app.post('/get-note', (req, res) => {
//     Note.find({
//         name: req.body['name']
//     }).then((notes) => {
//         res.status(200).send(notes)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

app.get('/get-notes', (req, res) => {
    Note.find({}).then((notes) =>{
        res.status(200).send(notes)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.post('/delete-note', (req, res) => {
    Note.deleteOne({
        title: req.body['title'],
        // name: req.body['name']
    }).then(() => {
        res.status(200).send('Note Deleted Successfully')
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/update-note', (req,res) => {
    Note.updateMany({
        title: req.body['title'],
        // name: req.body['name']
    },
    {
        description: req.body['description']
    }
    ).then((datas) => {
        if(datas.nModified > 0){
            res.status(200).send("Note Modified")
        }
        else{
            res.status(400).send("Note not found")
        }
    }).catch((error) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})