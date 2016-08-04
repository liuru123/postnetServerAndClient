'use strict';
const barcode = require('../../src/transform/BarcodeTransformPost.js');

let barcodeToPost = new barcode();

describe("BarcodeTransformPost", function () {
    it("return result", function () {
        let example = '| |:|:: |:::| |:|:: |:::| ::||: ::|:| |';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = {error:``,data:`97973     cd is:5`};
        expect(result).toEqual(expected);
    });

    it("return the error of the not find", function () {
        let example = '| |:|:: |:::| |:|:: |:::| ::||: |:|:| |';
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = {error:`the each number > 9 or the exampleString is not correct`,data:``};
        expect(result).toEqual(expected);
    });

    it("should return the not have right char", function () {
        let example = 'sss';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = {error:`the input is have not correct input`,data:``};
        expect(result).toEqual(expected);
    });

    it("should return  the each barcode not five char", function () {
        let example = '| |||||| ||||:: |:: |';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = {error:`the barcode is not five char`,data:``};
        expect(result).toEqual(expected);
    });

    it("the barcode have not frame", function () {
        let example = ':| ||||| |:';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = {error:`the barcode have not frame`,data:``};
        expect(result).toEqual(expected);
    });

    it("the barcode'length is not valid", function () {
        let example = '| |:::| ||::: |:::: |::|| |';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = {error:`the barcode length is not valid`,data:``};
        expect(result).toEqual(expected);
    });
});