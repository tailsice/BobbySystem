var express = require('express');
var router = express.Router();
var
    exec = require('exec'),
    child_process = require('child_process'),
    write_file_path = '/srv/Bobby/FILE',
    script_folder_path = '/srv/Bobby/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/umount', function(req, res, next) {
	var text = req.body.text;
	var res_text = "";


var fs = require('fs');
fs.writeFile(write_file_path, text, function(err,callback) {
    if(err,callback) {
        return console.log(err);
        callback(err);
    } else {

        child_process.execFile(script_folder_path + "umount.sh",null,function (err, stdout, stderr) {
        //console.log("[DEBUG] child_process.execFile = " + stdout);
        res_text = stdout;
        //console.log("[DEBUG] res_text = " + res_text);
	res.json({ text: res_text });
});
    }
    //console.log("[DEBUG]The file was saved!");
}); 

});

router.post('/mount', function(req, res, next) {
	var text = req.body.text;
	var res_text = "";


var fs = require('fs');
fs.writeFile(write_file_path, text, function(err,callback) {
    if(err,callback) {
        return console.log(err);
        callback(err);
    } else {

        child_process.execFile(script_folder_path + "mount.sh",null,function (err, stdout, stderr) {
        //console.log("[DEBUG] child_process.execFile = " + stdout);
        res_text = stdout;
        //console.log("[DEBUG] res_text = " + res_text);
	res.json({ text: res_text });
});
    }
    //console.log("[DEBUG]The file was saved!");
}); 

});

module.exports = router;
