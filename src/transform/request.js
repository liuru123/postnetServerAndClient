/**
 * Created by liuru on 16-8-2.
 */
var request = require('sync-request');
module.exports=function sendRequest(router,cmd) {

    let res = request('post', `http://127.0.0.1:3000/${router}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `code=${cmd}`
    });
    console.log(JSON.parse(res.getBody().toString()));
};
