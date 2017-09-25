var express = require('express');
var gulp = require('gulp');
var fs = require('fs');
gulp.task('express', function() {
    var app = express();
    app.use('/', express.static('website'));
    app.get('/getmenu', function(request, response) {
        var q = request.query.q;

        console.log("q=" + q);

        if (q == "south-breakfast") {

            response.sendFile(__dirname + "/data/menu/southbreakfast.json");

        } else if (q == "north-breakfast") {

            response.sendFile(__dirname + "/data/menu/northbreakfast.json");

        } else {

            response.sendFile(__dirname + "/data/menu/nomatch.json");
         
        console.log("no match!!!!!");
    }


    });


    function checkFileExistsSync(filepath) {
       var flag = true;

        try {

            fs.accessSync(filepath, fs.F_OK);

        } catch (e) {

            flag = false;

        }

        return flag;
    }

    var server = app.listen(3000, function() {

        console.log("server started at port 3000");

    });

});



//default task

gulp.task('default', ['express']);
