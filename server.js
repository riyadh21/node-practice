var http = require("http");
var url = require("url");
var port = 8888;

function start(route, handle){
	function onRequest(request , response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " Recieved.");

		route(pathname, handle);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		//console.log(response);
		response.end();
	};

	http.createServer(onRequest).listen(port);
	console.log("Server has started on : " + port);
}

exports.start = start;
