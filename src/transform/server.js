const express =require('express');
const bodyParser =require('body-parser');
const app = express();
var post = require('./PostTransformBarcode');
var barcode = require('./BarcodeTransformPost');
 app.use(bodyParser.urlencoded({extend:true}));

app.post('/PostTransformBarcode',function (req,res) {
    res.send(new post().postTransformBarcode(req.body.code));
});
app.post('/BarcodeTransformPost',function (req,res) {
    res.send(new barcode().BarcodeTransformPost(req.body.code));
});
app.listen(3000,function () {
    console.log('Example app listening on port 3000!');
});


module.exports = app;