const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

const db = new sqlite3.Database('movies.db');

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server rodando em: http://localhost:${port}`)
})