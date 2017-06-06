$(document).ready(function(){

	$("#signup-btn").click(function () {
    	event.preventDefault();
		// $("#data-panel").text("signup button clicked");		
		var nameInput = $("#LoginUser");
		var pwInput = $("#LoginPassword");
		var postReqData = {
			customer_name: nameInput.val().trim(),
			customer_pw: pwInput.val().trim()
		}
	    $("#data-panel").empty();
	    $.ajax({
	        method: "POST",
	        url: "/customers",
	        data: postReqData
	    }).done(loadData).fail(function(err){
	    	console.log("app.js signup-btn click error");
	    	console.log(err);
	    });
	});

	function loadData(data) {
	    $("#data-panel").html(JSON.stringify(data));
	}

	function handleError() {
 	   console.log(arguments);
	}
});