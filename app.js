const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/:ff/:f/:fo/:fold/:folder/:file', (req, res) => {
    const filepath = '/' + req.params.ff + '/' + req.params.f + '/' + req.params.fo + '/' + req.params.fold + '/' + req.params.folder + '/' + req.params.file + '/';
    res.sendFile(path.join(__dirname, 'public', filepath));
});

app.get('/:f/:fo/:fold/:folder/:file', (req, res) => {
    const filepath = '/' + req.params.f + '/' + req.params.fo + '/' + req.params.fold + '/' + req.params.folder + '/' + req.params.file + '/';
    res.sendFile(path.join(__dirname, 'public', filepath));
});

app.get('/:fo/:fold/:folder/:file', (req, res) => {
    const filepath = '/' + req.params.fo + '/' + req.params.fold + '/' + req.params.folder + '/' + req.params.file + '/';
    res.sendFile(path.join(__dirname, 'public', filepath));
});

app.get('/:fold/:folder/:file', (req, res) => {
    const filepath = '/'+ req.params.fold + '/' + req.params.folder + '/' + req.params.file + '/';
    res.sendFile(path.join(__dirname, 'public', filepath));
});

app.get('/:folder/:file/', (req, res) => {
    const filepath = '/' + req.params.folder + '/' + req.params.file;
    res.sendFile(path.join(__dirname, 'public', filepath));
});

app.listen(port, ()=>{
    console.log(`Server on`);
});