
        function validateform()
        {  
        var inpName=document.myform.pname.value; 
        var passwd=document.myform.pword.value; 
        var cpasswd=document.myform.cpword.value;  
        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
          
        if (inpName==null || inpName=="")
        
        {  
          alert("Name can't be blank");  
          // return false;  
        }
        else if(!pwd_expression.test(passwd))
               {
                     alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
                    //  return false;
               }
        else if(cpasswd=='')
                {
                    alert('Enter Confirm Password');
                    // return false;
               }
               
           else if(passwd != cpasswd)
                {
                     alert ('Password not Matched');
                    //  return false;
                }
                
                 else if(passwd.length<6)
            {  
           alert("Password must be at least 8 to 15 characters long."); 
          //  return false; 
        
           }
           else if(passwd.length>=18)
           {
             alert("password is not within the length")
            //  return false;
           }
         else{
          document.write( "Valid User name and Password" );
        }  
        }