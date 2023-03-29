function formValid() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");
    var text = '';


    if (name.length < 5) {
        text = "pleas enter your name agin";
        error.innerHTML = text;
        return false;


    }

    else if (email.indexOf("@") == -1) {

        text = "pleas enter your email agin";
        error.innerHTML = text;
        return false;


    }

    else {
        alert("done");
        return true;

    }

}