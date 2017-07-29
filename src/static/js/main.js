var sock = null;
var count = 0;
$("#send").prop("disabled",true);
$("#close").prop("disabled",true);

$("#trigger").click(function(){
	sock = new SockJS('http://127.0.0.1:8080/chat');
	sock.onopen = function() {
		$("#send").prop("disabled",false);
		$("#close").prop("disabled",false);
	    printMessage("connection open");
	};
	sock.onmessage = function(e) {
		printMessage(e.data);
	 };

	 sock.onclose = function() {
		printMessage("connection close");
	 };
});

$("#send").click(function(){
	var message = 'test message ' + count;
	sock.send(message);
	printMessage(message);
	count++;
});

$("#close").click(function(){
	sock.close();
});

function printMessage(message){
	var oldContent = $("#conversation").html();
	$("#conversation").html(oldContent + "<br>" + message);
}