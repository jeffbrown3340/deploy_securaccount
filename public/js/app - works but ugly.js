$(document).ready(function(){

	$.ajaxSetup({
	    beforeSend: function(xhr) {
	        var token = sessionStorage.getItem("token");
	        if(token) 
	            xhr.setRequestHeader("authorization", token);
	    }
	});

	$("#login-btn").click("submit", function (event) {
	    event.preventDefault();
		var nameInput = $("#LoginUser");
		var pwInput = $("#LoginPassword");
		var postReqData = {
			customer_name: nameInput.val().trim(),
			customer_pw: pwInput.val().trim()
		}
	    ajaxSA("POST", "/authenticate", postReqData, sessStorAndGetRecords);
	});

	function sessStorAndGetRecords(data){
		sessionStorage.setItem("token", data.token);
		// ajaxSA("GET", "/records");
        $.ajax({
	        method: "GET",
	        url: "/records",
	        data: {},
	        success: function(completeHtmlPage) {
			    $("html").empty();
    			$("html").append(completeHtmlPage);
    		}
	    }).done(function(html){
	    	console.log("html=",html);
	    	// $(document).html(html);
	    }).fail(function(err){
	    	console.log(">ERROR: app.js, " + method +", " + url + "<");
	    	console.log(err);
	    });

	}

	// old code from node-token-authentication	    
	//     var $form = $(this);

	//     $.ajax({
	//         method: "POST",
	//         url: "/api/authenticate",
	//         data: $form.serialize()
	//     }).done(function (data) {
	//         sessionStorage.setItem("token", data.token);
	//     }).fail(handleError);
	// });


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
	    ajaxSA("POST", "/signup", postReqData, createResult);
	});

// jlb 6-8-2017-0232 begin INCOMPLETE block
	// LOGIN SEQUENCE
	// // jlb 6-8-2017-0232 untested 
	// $("#login-btn").click(function () {
    	// event.preventDefault();
	    // var $form = $("#form-loginsignup");
		// ajaxSA("POST", "/authenticate", $form.serialize(), setSeshStor);

	// jlb 6-8-2017-0232 untested
 	// function setSeshStor(data) {
		// sessionStorage.setItem("token", data.token);
	// }
// jlb 6-8-2017-0232 end INCOMPLETE block
 

	function createResult(data) {
		if (data === "signup-success") {
		    $("#data-panel").html("<p style='color: red'>Thanks for siging up, please login.</p>");
		} else {
			$("#data-panel").html("<p style='color: red'>SIGN UP unsuccessful, please try again.</p>");
		}
	}

	function handleError() {
 	   console.log(arguments);
	}

	function ajaxSA(method, url, data, doneFx){
	    $.ajax({
	        method: method,
	        url: url,
	        data: data
	    }).done(doneFx).fail(function(err){
	    	console.log(">ERROR: app.js, " + method +", " + url + "<");
	    	console.log(err);
	    });
	}

	function sayHello(){
		console.log("6-9-2017-2139-HELLO");
	}
});