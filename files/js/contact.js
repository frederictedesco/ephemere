var baseUrl = "http://www.galerie-ephemere-liege.be/es/ephemere/contact"

function statusDcode(){
    baseUrl.get(function (arg) {
         console.log(arg);
        }
    );
};

function status(e){alert(e)};

function postContact(){
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var message = $("#message").val();
	baseUrl.post(
		function(e){},
		function(e){},
		{"name":name,"email":email,"phone":phone,"message":message},
		1000);
};
