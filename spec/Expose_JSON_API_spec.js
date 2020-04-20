const axios = require('axios');
const readline = require('readline');
require('dotenv').config();

let server = require('../src/Expose_JSON_APi');

describe('Testing addNewVisitor endpoint', () => {
  it(`should save to a database and return its api`, async (done) => {
    let response = await axios.post('http://localhost:5000/addNewVisitor', {
      visitorname: 'Lebo Mphago',
      assistantname: 'Teboho',
      visitorage: '20',
      visitdate: '04/3/2020',
      visittime: '12:30',
      comments: 'No comment'
    });

    expect(response.data).toEqual([
      Object({
        visitorid: response.data[0].visitorid,
        visitorname: 'Lebo Mphago',
        asssistantname: 'Teboho',
        visitorage: 20,
        visitdate: '04/3/2020',
        visittime: '12:30',
        comments: 'No comment'
      }),
    ]);

    done();
  });
});

describe('express /viewVisitors endpoint', () => {
  it(`should query a database for all visitors return the api of the results`, async (
    done
  ) => {
    await axios.post('http://localhost:5000/addNewVisitor', {
      visitorname: 'Thabo Mayika',
      assistantname: 'Teboho',
      visitorage: '22',
      visitdate: '20/12/1997',
      visittime: '12:30',
      comments: 'No comment'
    });

    let view = await axios.get('http://localhost:5000/viewVisitors');

    expect(view.data).toEqual([
      Object({
        visitorid: 1,
        visitorname: 'Thabo Mayika',
        assistantname: 'Teboho',
        visitorage: '22',
        visitdate: '20/12/1997',
        visittime: '12:30',
        comments: 'No comment'
      }),
    ]);

    done();
  });
});

describe('express /viewVisitor:id endpoint', () => {
  it('should view a visitor with passed id from the database and return the api', async (
    done
  ) => {
    const response = await axios.get('http://localhost:5000/viewVisitor');

    expect(response.data).toEqual([
      Object({
        visitorid: response.data[0].visitorid,
        visitorname: 'Lebo Mphago',
        asssistantname: 'Teboho',
        visitorage: 20,
        visitdate: '04/3/2020',
        visittime: '12:30',
        comments: 'No comment'
      }),
    ]);

    done();
  });
});
