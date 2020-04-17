const express = require('express');
const path = require('path');

// requiring a Database
const {
  addNewVisitor,
  deleteVisitor,
  deleteVisitors,
  viewVisitor,
  viewVisitors,
  updateVisitor,
} = require('./database');

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/newVisitor', async (req, res) => {
  const visitor = await addNewVisitor(
    name,
    age,
    date,
    time,
    assistant,
    comments
  );

  let name = req.body.name;
  let age = req.body.age;
  let date = req.body.date_of_visit;
  let time = req.body.time_of_visit;
  let assistant = req.body.assistant;
  let comments = req.body.comments;

  res.status(200).json({
    status: 'ok',
    visitor: visitor[0],
  });
});

app.delete('/deletVisitors', async (req, res) => {
  const visitors = await deleteVisitors();

  res.status(200).json({
    status: 'ok',
    visitors: visitors,
  });
});

app.delete('/deleteVisitor/:id', async (req, res) => {
  const id = req.params.id;

  const visitor = await deleteVisitor(id);

  res.status(200).json({
    status: 'ok',
    visitor: visitor[0],
  });
});

app.get('/viewVisitor/:id', async (req, res) => {
  const id = req.params.id;

  const visitor = await viewVisitor(id);

  res.status(200).json({
    status: 'ok',
    visitor: visitor[0],
  });
});

app.get('/viewVisitors', async (req, res) => {
  const visitors = await viewVisitors();

  res.status(200).json({
    status: 'ok',
    visitors: visitors,
  });
});

app.put('/update-visitor/:id', async (req, res) => {
  const visitor = await updateVisitor(
    id,
    name,
    age,
    date,
    time,
    assistant,
    comments
  );

  let name = req.body.name;
  let age = req.body.age;
  let date = req.body.date_of_visit;
  let time = req.body.time_of_visit;
  let assistant = req.body.assistant;
  let comments = req.body.comments;

  const id = req.params.id;

  res.status(200).json({
    status: 'ok',
    visitor: visitor[0],
  });
});

const server = app.listen(3000, () =>
  console.log('Express Server is running on Port: 3000')
);

module.exports = server;
