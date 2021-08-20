const signInApple = () => { 
     // alert("Hello");
           window.AppleID.auth.init({
                clientId : 'com.example.app.signin.dunkin',
                scope : 'name email',
                redirectURI : 'https://01pragya.github.io',
               // state : 'openssl_random_pseudo_bytes',               
                usePopup : true //or false defaults to false
            });
         
         const response = async () => {      
            try {
                 const data = await AppleID.auth.signIn();
                  if(Object.keys(data).length>=2){
                        console.log(data);
                        console.log(data.authorization);
                        console.log(data.user);
                  }
                  else{
                        console.log("user already exist");
                        console.log(data.authorization);
                  }
            } catch ( error ) {
                 //handle error.
                  console.log("failure");
            }
               
         }
         response();
      
      
}
