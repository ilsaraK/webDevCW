 function validateForm() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var details = document.getElementById("details");
    var subject = document.getElementById("subject");

    if (fname.value == "" ) {
        alert ("First name must be filled..");
        return false;
    }
    if (lname.value == "" ) {
        alert ("Last name must be filled..");
        return false;
    }

    if (email.value == "" ) {
        alert ("Email must be filled..");
        return false;
    }

    if (subject.value == "") {
      alert ("Subject must be filled..");
        return false;
    }

    if(details.value == "" ) {
        alert ("Details must be filled..");
        return false;
    }
    }


