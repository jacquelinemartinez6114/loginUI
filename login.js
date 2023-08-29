let attempt=3; //number of login attempts permitted

//function that runs when user clicks submit button with strict rules
function validate(){
    let username= document.getElementById("username").value;
    let password = document.getElementById("password").value;
        if (username == "jacqueline" && password == "1234") {
            alert ("Login Successful");
            return false;
        }
        else {
            attempt --; /*Decrement by one */
            alert("You have "+attempt+" attempts left;");
        }
}