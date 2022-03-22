function getParameter(){
            var idx = document.URL.indexOf('?');
            var Parameter = new Array();
            if (idx != -1) {
                var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                for (var i=0; i<pairs.length; i++){
                    nameVal = pairs[i].split('=');
                    Parameter[nameVal[0]] = nameVal[1];
                }
            }
            return Parameter;
            }
        Parameter = getParameter(();
        fname = unescape(Parameter["fname"]);
        lname = unescape(Parameter["lname"]);
        email = unescape(Parameter["email"]);
        details = unescape(Parameter["details"]);
        subjects = unescape(Parameter["subject"]);
    
        document.write("fname : " + First name + "<br><br>");
        document.write("lname : " + Last name + "<br><br>");
        document.write("email : " + email + "<br><br>");
        document.write("subject : " + subjects + "<br><br>");
        document.write("details : " + details + "<br><br>");
        
    
    
    
        function showMessage(){
            alert("Submiting your query.");
        }
    