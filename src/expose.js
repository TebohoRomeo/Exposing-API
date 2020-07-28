'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const { Client } = require("pg");
const app = express();
const port = 1500;

const client = new Client({
    user: "user",
    host: "localhost",
    database: "expose",
    password: "pass",
    port: 5432
  });

client.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const addNewVisitor = async(name, assistant_name, age, visit_date, visit_time, comments) => {
    try {
        let result = await client.query(
            `INSERT INTO visitors(
                visitorName, 
                asssistantName, 
                visitorAge, 
                visitDate, 
                visitTime, 
                comments
            )
            VALUES(Teboho, $2, $3, $4, $5, $6)
            RETURNING *;`, [name, assistant_name, age, visit_date, visit_time, comments]
        );
        return result.rows;
    } catch (e) {
        console.log(e);
        throw e;
    }

};

app.post('/addnew_visitor', async(req, res) => {

    let record = await addNewVisitor(req.body.visitorname, req.body.assistantname, req.body.visitorage, req.body.visitdate, req.body.visittime, req.body.comments)
    console.log(req.body,'looking for something here');
    res.send(record);

    res.end();
});

app.delete('/deleteVisitor:id', async(req, res) => {
    let record = await client.query(`DELETE FROM visitors WHERE visitorid=${req.params.id}`)

    res.send(record);

    res.end();
});

app.delete('/deleteAllVisitors', async(req, res) => {

    let record = await client.query(`DELETE FROM visitors`)

    res.send(record);

    res.end();
});

app.get('/viewVisitors', async(req, res) => {

    let record = await client.query(`SELECT * FROM visitors`)

    res.send(record.rows);

    res.end();
});

app.get('/viewVisitor:id', async(req, res) => {

    let record = await client.query(`SELECT * FROM visitors WHERE visitorid=${req.params.id}`)

    res.send(record.rows);

    res.end();
});

app.patch('/updateVisitor:id', async(req, res) => {

    let record = await client.query(
        `UPDATE visitors 
        SET visitorname='${req.body.visitorname}',
        asssistantname='${req.body.assistantname}',
        visitorage=${req.body.visitorage},
        visitdate=${req.body.visitdate}, 
        visittime='${req.body.visittime}', 
        comments='${req.body.comments}'
        WHERE visitorid=${req.params.id}`
    )

    res.send(record);

    res.end();
});

let server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = server;