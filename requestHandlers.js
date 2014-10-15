//var exec = require("child_process").exec;
var queryString = require("querystring"),
fs = require("fs");


function start(response, postData) {
	console.log("Request handler 'start' was called.");
	var body = '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" content="text/html; '+
				'charset=UTF-8" />'+
				'</head>'+
				'<body>'+
				'<form action="/upload" method="post">'+
				'<textarea name="text" rows="20" cols="60"></textarea>'+
				'<input type="submit" value="Submit text" />'+
				'</form>'+
				'</body>'+
				'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});			
	response.write(body);
	response.end();	
/*				
	exec("find /",
		{timeout : 10000, maxBuffer : 20000*1024},
		function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
*/
/*
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	
	sleep(10000);
*/	
	//return content;
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent : " + postData);
	response.end();
}

function show(response, postData){
	console.log("Request Handeler 'Show was called.'");
	fs.readFile("/temp/test.png", "binary", function(error, file){
		if(error){
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();	
		} else{
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();	
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;
