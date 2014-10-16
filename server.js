var http = require("http");
var url = require("url");
var port = 8888;

function start(route, handle){
	function onRequest(request , response){
		//var postdata = "";
		var pathname = url.parse(request.url).pathname;
		
		console.log("Request for " + pathname + " Recieved.");

		route(handle, pathname, response, request);
		
		//request.setEncoding("utf8");
/*
		request.addListener("data", function(postdatachunk){
			postdata += postdatachunk;
			console.log("Recieved POST data chunk '" + postdatachunk + "'.");
		});

		request.addListener("end", function(){
			route(pathname, handle, response, postdata);
		});
*/
//		var content = route(pathname, handle, response);
//		response.writeHead(200, {"Content-Type": "text/plain"});
//		response.write(content);
		//console.log(response);
//		response.end();
	};

	http.createServer(onRequest).listen(port);
	console.log("Server has started on : " + port);
}

exports.start = start;
