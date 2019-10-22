var api = new Mesibo();
api.setAppName("console");
api.setListener(new MesiboListener());
api.setCredentials('tcig83v3sp6mqf4tgtd3yfpo7j55fttvkntzilkuhjrplrnpynamsfw63x6mhwfu');
api.start();
function MesiboListener() {
}

MesiboListener.prototype.Mesibo_OnConnectionStatus = function(status, value) {
	console.log("TestNotify.prototype.Mesibo_OnConnectionStatus: "  + status);
}

MesiboListener.prototype.Mesibo_OnMessageStatus = function(m) {
	console.log("TestNotify.prototype.Mesibo_OnMessageStatus: from "  
			+ m.peer + " status: " + m.status);
}

MesiboListener.prototype.Mesibo_OnMessage = function(m, data) {
	console.log("TestNotify.prototype.Mesibo_OnMessage: from "  + m.peer);
}