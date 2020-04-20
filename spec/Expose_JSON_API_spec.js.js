const axios = require('axios');
const readline = require('readline');
require('dotenv').config();

let server;

beforeEach(() => {
    server = require('../src/Expose_JSON_APi');
});

describe('express /addNewVisitor endpoint', () => {

    it(`should save to a database and return its api`, async(done) => {
        let response = await axios.post('http://localhost:5000/addNewVisitor', {
            visitorname: "Lebo Mphago",
            assistantname: "Teboho",
            visitorage: "20",
            visitdate: "04/3/2020",
            visittime: "12:30",
            comments: "No comment"
        });
        expect(response.data).toEqual([Object({ visitorid: response.data[0].visitorid, visitorname: 'Lebo Mphago', asssistantname: 'Teboho', visitorage: 20, visitdate: '04/3/2020', visittime: '12:30', comments: 'No comment' })])

        done();
    });

});