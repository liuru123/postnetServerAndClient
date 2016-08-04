const ba = require('../../src/transform/action/BarcodeAction.js');
const init = require('../../src/transform/action/InitAction.js');
const inputBar = require('../../src/transform/action/InputBarcode.js');
const inputPo = require('../../src/transform/action/InputPost.js');
const post = require('../../src/transform/action/PostAction.js');
const router = require('../../src/transform/action/RouterAction.js');
const routes= require('../../src/transform/action/Router.js')
//const shell = require('../../Shell.js');

describe("const[0].doAction", function () {
    it("should return the name of function of number", function () {
        let input = '1';
        let result = ba.doAction(input);
        let expected = 'InputBarcode';
        expect(result).toEqual(expected);
    });
    it("should return the name of function of letter", function () {
        let input = '2';
        let result = ba.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
    it("should return the init", function () {
        let input = '3';
        let result = ba.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
});

describe("initAction", function () {
    it("should return the init ", function () {
        let input = '1';
        let result = init.doAction(input);
        let expected = 'BarcodeTransformPost';
        expect(result).toEqual(expected);
    });
    it("should return the init ", function () {
        let input = '2';
        //console.log(init)
        let result = init.doAction(input);
        let expected = 'PostTransformBarcode';
        expect(result).toEqual(expected);
    });
    it("should return the init ", function () {
        let input = '4';
        let result = init.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
});

describe("inputbarcode", function () {
    it("should return the input", function () {
        let input = 'b';
        let result = inputBar.doAction(input);
        let expected = 'BarcodeTransformPost';
        expect(result).toEqual(expected);
    });
    it("should return the input", function () {
        let input = '3';
        let result = inputBar.doAction(input);
        let expected = 'BarcodeTransformPost';
        expect(result).toEqual(expected);
    });
    it('should reutrn the input check BarcodeTransformPost', function () {
        let cmd = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let expected = {error:``,data:`12345     cd is:5`};
        spyOn(console, 'log');
        let result = inputBar.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
    it('should reutrn the input check BarcodeTransformPost', function () {
        let cmd = '|ssss';
        let expected = {error:`the input is have not correct input`,data:``};
        spyOn(console, 'log');
        let result = inputBar.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
    it('should reutrn the input check BarcodeTransformPost', function () {
        let cmd = '| |::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let expected = {error:`the each number > 9 or the exampleString is not correct`,data:``};
        spyOn(console, 'log');
        let result = inputBar.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
});

describe("inputPost", function () {
    it("should return the post to Barcode", function () {
        let input = 'p';
        let result = inputPo.doAction(input);
        let expected = 'PostTransformBarcode';
        expect(result).toEqual(expected);
    });
    it("should return the post to Barcode", function () {
        let input = 'i';
        let result = inputPo.doAction(input);
        let expected = 'InputPost';
        expect(result).toEqual(expected);
    });

    it('should return the input check postTransformBarcode', function () {
        let cmd = '12345';
        let expected = {error:``,data:`|:::||::|:|::||::|::|:|:|::|:|:|`};
        spyOn(console, 'log');
        let result = inputPo.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected);
    });

    it('should return the input check postTransformBarcode', function () {
        let cmd = '123453';
        let expected = {error:`the input is error`,data:``};
        spyOn(console, 'log');
        let result = inputPo.doAction(cmd);
        let expected1 = 'PostTransformBarcode';
        expect(console.log).toHaveBeenCalledWith(expected);
        expect(result).toEqual(expected1);
    });
});

describe("postAction", function () {
    it("should return the postAction", function () {
        let input = '2';
        let result = post.doAction(input);
        let expected = 'InputPost';
        expect(result).toEqual(expected);
    });
    it("should return the postAction", function () {
        let input = '3';
        let result = post.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
    it("should return the postAction", function () {
        let input = '4';
        let result = post.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
});


/* describe("route",function () {
    it("should output the barcodeTransformPost interface",function () {
        const actions = [init, ba, post, inputBar, inputPo];
        let route = new routes(actions);
        let cmd = '1';
        let result = route.handle(cmd);
        spyOn(console,'log');
        let expected =`----1-inputBarcode
        ----2-return init
        ----q-exist`.trim();
        expect(result).toHaveBeenCalledWith(expected);
    });
    it("should output the postTransformBarcode interface",function () {
        const actions = [init, ba, post, inputBar, inputPo];
        let route = new routes(actions);
        let cmd = '2';
        let result = route.handle(cmd);
        spyOn(console,'log');
        let expected =`----2-inputPost
----3-return the init
----q-exist
`.trim();
        expect(result).toHaveBeenCalledWith(expected);
    });
    it("should output the inputBarcode interface",function () {
        const actions = [init, ba, post, inputBar, inputPo];
        let route = new routes(actions);
        let cmd = '1';
        let result = route.handle(cmd);
        spyOn(console,'log');
        let expected =``;
        expect(result).toHaveBeenCalledWith(expected);
    });
    it("should output the init  interface",function () {
        const actions = [init, ba, post, inputBar, inputPo];
        let route = new routes(actions);
        let cmd = '2';
        let result = route.handle(cmd);
        spyOn(console,'log');
        let expected =`----初始化界面:
        ----1-barcodeTransformPost
        ----2-postTransformBarcode
        ----q-exist`.trim();
        expect(result).toHaveBeenCalledWith(expected);
    });

    it("should output the inputPost  interface",function () {
        const actions = [init, ba, post, inputBar, inputPo];
        let route = new routes(actions);
        let cmd = '2';
        let result = route.handle(cmd);
        spyOn(console,'log');
        let expected =``;
        expect(result).toHaveBeenCalledWith(expected);
    });
    it("should check the console the help of every interface",function () {
        const actions = [init, ba, post, inputBar, inputPo];
        let route = new routes(actions);
        let cmd = '3';
        let result = route.handle(cmd);
        spyOn(console,'log');
        let expected =`----初始化界面:
        ----1-barcodeTransformPost
        ----2-postTransformBarcode
        ----q-exist
`.trim();
        expect(result).toHaveBeenCalledWith(expected);
    });

});*/