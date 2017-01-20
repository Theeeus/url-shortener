var express = require('express');
var app = express();
var path = require('path');
var validUrl = require('valid-url');
var port = process.env.PORT || 8080;
var mongojs = require('mongojs');
var db = mongojs('mongodb://Theeeus:js4dwin@ds163738.mlab.com:63738/tiny-url',['urls']);

//Add new entry and get short url
app.get('/new/:url(*)', function(req, res){
    var newURL = req.params.url;
    if (validUrl.isWebUri(newURL)){
        db.urls.find().sort({short_URL:-1}).limit(1).toArray(function(err,code){
        var lastCode;
        lastCode = code[0].short_URL;
        var newCode = Number(lastCode) + 1;
        switch (newCode.toString().length) {
            case 1:
                newCode = "000" + newCode;
                break; 
            case 2:
                newCode = "00" + newCode;
                break; 
            case 3:
                newCode = "0" + newCode;
                break;
            default:
                newCode = newCode;
        }
        db.urls.insert({"original_URL":newURL, "short_URL":newCode});
        res.json({"original_URL":newURL, "short_URL":newCode});
        });
       
    } else {
        res.send('not a valid URI: ' + newURL);
    }   
});

//Redirect
app.get('/:code', function(req, res, next){
    var code = req.params.code;
    if (!code || code == "favicon.ico") {
        next();
        return;
    } 
     db.urls.find({short_URL:code}).limit(1).next(function(err, url){
        if(err) {
            res.send(err);
        } else if (url) {
            res.redirect(url.original_URL);
        } else {
            res.send('invalid short URL');
        }
    });
});


app.get('/', function(req, res){
    var fileName = path.join(__dirname, 'views/index.html');
    res.sendFile(fileName, function(err){
        if (err) {
            res.send(err);
        } else {
            console.log('Sent: ' + fileName);
        }
    });
});

app.listen(port, function(){
    console.log('URL shortener app listening on port ' + port);
});