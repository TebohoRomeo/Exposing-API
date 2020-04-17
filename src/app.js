const express = require('express');
const path 	  = require('path');

// requiring a Database
const {addNewVisitor, deleteVisitor, deleteVisitors, viewVisitor, viewVisitors, updateVisitor} = require('./database');

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/newVisitor', async (req, res) => {
    
	const visitor = await addNewVisitor(name, age, date, time, assistant, comments);
	// creating inputs here
	let name = req.body.name;
	let age = req.body.age;
	let date = req.body.date_of_visit;
	let time = req.body.time_of_visit;
	let assistant = req.body.assistant;
    let comments = req.body.comments;
    

	res.status(200).json({ 
		status: 'ok',
		visitor: visitor[0] 
	});
}); 

app.delete('/deleteVisitor/:id', async (req, res) => {
	
	const id = req.params.id;

	const visitor = await deleteVisitor(id);

	res.status(200).json({ 
		status: 'ok',
		visitor: visitor[0] 
	});

});