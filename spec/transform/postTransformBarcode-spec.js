'use strict';
const postToBarcode = require('../../src/transform/PostTransformBarcode.js');
let post = new postToBarcode();
describe("postTransformBarcode", function () {
    it("should return the result", function () {
        let inputPost = '12345-2344';
        let result = post.postTransformBarcode(inputPost);
        let expected = {error:``,data:'|:::||::|:|::||::|::|:|:|:::|:|::||::|::|:|::|::|:||'};
        expect(result).toEqual(expected);
    });
    it("should return the error information", function () {
        let inputPost = '123';
        let result = post.postTransformBarcode(inputPost);
        let expected = {error:`the input is error`,data:``};
        expect(result).toEqual(expected);
    });
    it("should return the error information", function () {
        let inputPost = '12345';
        let result = post.postTransformBarcode(inputPost);
        let expected = {error:``,data:`|:::||::|:|::||::|::|:|:|::|:|:|`};
        expect(result).toEqual(expected);
    });
});