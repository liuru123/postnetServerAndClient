const superTest = require('supertest');
const request = superTest('localhost:3000');

describe('post/BarcodeTransformPost', function () {
    it('respond with json', function (done) {
        let code = `| :::|| :::|| :::|| :::|| :::|| :::|| |`;
        request
            .post('/BarcodeTransformPost')
            .type('form')
            .send({code: code})
            .expect({error: ``, data: `11111     cd is:5`.trim()})
            .end(function (err, res) {
                if (err)
                    throw err;
                done();
            });
    });
});
describe('post/BarcodeTransformPost',function () {
    it("respond with json",function (done) {
        let code = `12333`;
        request
            .post('/PostTransformBarcode')
            .type('form')
            .send({code:code})
            .expect({error:``,data:`|:::||::|:|::||:::||:::||:|::|:|`})
            .end(function (err,res) {
                if(err)
                    throw err;
                done();
            });
    });

});