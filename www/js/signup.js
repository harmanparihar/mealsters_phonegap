$(function(){
  const user_ref= firebase.database().ref("/users");
  $('form.signup_form').submit(function (event) {
    $(".error").html("");
    $(".passworderror").html("");
    event.preventDefault();
    let name= $("#username").val();
    let pass= $("#password").val();
    let repass=$("#password2").val();
    console.log(pass.length);
    if(pass.length<6){
      $(".passwordlength").html("Password must be more than 6 characters!");
    }
    else{
    user_ref.orderByChild("username").equalTo(name).once("value",snapshot => {
      const user = snapshot.val();
      if (user){
        console.log("exists!");
        $(".error").html("Username already exists! Try a different one.");
      }else{
        if(pass == repass){
        pass=CryptoJS.MD5(pass).words[0]; //Creating MD5 hash for the password
        user_ref.push({username : name, password: pass});
        console.log("user added");
        document.location.href = "login.html";
        }
        else{
          console.log("password mismatch");
          $(".passworderror").html("Passwords are not identical!");
        }
      }
    });
    }
  })
});
