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

// describe('express /viewVisitors endpoint', () => {

//     it(`should query a database for all visitors return the api of the results`, async(done) => {

//         await axios.post('http://localhost:5000/addNewVisitor', {
//             visitorname: "Sihle",
//             assistantname: "Maphela",
//             visitorage: "12",
//             visitdate: "11/24/1997",
//             visittime: "12:30:AM",
//             comments: "NOTHING!!!!!!!!!"
//         });

//         await axios.post('http://localhost:5000/addNewVisitor', {
//             visitorname: "Lehlohonolo",
//             assistantname: "Maphela",
//             visitorage: "12",
//             visitdate: "11/24/1997",
//             visittime: "12:30:AM",
//             comments: "NOTHING!!!!!!!!!"
//         });

//         let viewVisitors_API = await axios.get('http://localhost:5000/viewVisitors')

//         expect(viewVisitors_API.data).toEqual(
//             [Object({
//                     visitorid: 1,
//                     visitorname: 'KWAZI',
//                     asssistantname: 'MA',
//                     visitorage: 12,
//                     visitdate: '1997-11-23T22:00:00.000Z',
//                     visittime: '00:30:00',
//                     comments: 'NOTHING!!!!!!!!!'
//                 }),
//                 Object({
//                     visitorid: 2,
//                     visitorname: 'Sihle',
//                     asssistantname: 'Maphela',
//                     visitorage: 12,
//                     visitdate: '1997-11-23T22:00:00.000Z',
//                     visittime: '00:30:00',
//                     comments: 'NOTHING!!!!!!!!!'
//                 }),
//                 Object({
//                     visitorid: 3,
//                     visitorname: 'Lehlohonolo',
//                     asssistantname: 'Maphela',
//                     visitorage: 12,
//                     visitdate: '1997-11-23T22:00:00.000Z',
//                     visittime: '00:30:00',
//                     comments: 'NOTHING!!!!!!!!!'
//                 })
//             ]);

//         done();
//     });
// });

// describe('express /viewVisitor:id endpoint', () => {
//     it('should view a visitor with passed id from the database and return the api', async(done) => {
//         const response = await axios.get("http://localhost:5000/viewVisitor1");

//         expect(response.data).toEqual([Object({ visitorid: 1, visitorname: 'KWAZI', asssistantname: 'MA', visitorage: 12, visitdate: '1997-11-23T22:00:00.000Z', visittime: '00:30:00', comments: 'NOTHING!!!!!!!!!' })]);

//         done();
//     });
// });

// describe('express /updateVisitor:id endpoint', () => {
//     it('should view a visitor with passed id from the database and return the api', async(done) => {
//         const response = await axios.patch("http://localhost:5000/updateVisitor1", {
//             visitorname: 'Xoliswa',
//             asssistantname: 'Maphela',
//             visitorage: 12,
//             visitdate: '1997-11-23T22:00:00.000Z',
//             visittime: '00:30:00',
//             comments: 'NOTHING!!!!!!!!!'
//         });

//         expect(response.data).toEqual([Object({ visitorid: 1, visitorname: 'Xoliswa', asssistantname: 'Maphela', visitorage: 12, visitdate: '1997-11-23T22:00:00.000Z', visittime: '00:30:00', comments: 'NOTHING!!!!!!!!!' })]);

//         done();
//     });
// });

// xdescribe('express /deleteVisitor:id endpoint', () => {


//     it('should delete a visitor with passed id from the database and return the api', async(done) => {
//         const response = await axios.delete("http://localhost:5000/deleteVisitor1");

//         expect(response.config.url).toEqual('http://localhost:5000/deleteVisitor1');
//         expect(response.config.method).toEqual('delete');
//         expect(response.data.command).toEqual('DELETE');
//         expect(response.data.rowCount).toEqual(1);

//         done();
//     });

// });

// xdescribe('express /deleteAllVisitors endpoint', () => {
//     axios.post('http://localhost:5000/addNewVisitor', {
//         visitorname: "Sihle",
//         assistantname: "Maphela",
//         visitorage: "12",
//         visitdate: "11/24/1997",
//         visittime: "12:30:AM",
//         comments: "NOTHING!!!!!!!!!"
//     });

// });