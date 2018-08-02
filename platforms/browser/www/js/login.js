
  $(function(){
    const user_ref= firebase.database().ref("/users");
    $('form.signup_form').submit(function (event) {
      event.preventDefault();
      $(".err").html("");
      let name= $("#username").val();
      let pass= $("#password").val();
      pass=CryptoJS.MD5(pass).words[0];
      console.log(pass);
      user_ref.orderByChild("username").equalTo(name).once("value",snapshot => {
        const user = snapshot.val();
        if (user){
            console.log(user);
            snapshot.forEach(function(data) {
            console.log(data.key);
            console.log(data.val().password);
            console.log(data.val().username);

            console.log("Hello");
            if(data.val().password == pass){
              document.location.href = "mainpage.html";
            } else{
                $(".passworderror").html("Wrong Password!");
                console.log("Wrong Password entered");
            }
        });
        }else{
          console.log("user not valid");
          $(".error").html("Enter a valid email id!");
        }
      });



    })
  });
