
found = false;

$(document).ready(function(){


  $('#email').on('focusout', function(){

      if($('#email').val() != ""){

         if(validateEmail($('#email').val())){

          $('.error').fadeOut('slow');
          found = false;

         }else{
            $('.error').text('Invalid Email.');
            $('.error').fadeIn('slow');
            found = true;

         }

      }else{
          $('.error').text('Email Required.');
          $('.error').fadeIn("slow");
          found = true;
      }

  });
  $('#name').on('focusout', function(){
    if($('#name').val() != ""){
      $('.error1').fadeOut('slow');
      found = false;
    }
    else{
      $('.error1').text('Name Required.');
      $('.error1').fadeIn("slow");
      found = true;
    }
  });

  $('#name').on('focusout', function(){
    if($('#name').val() != ""){
      $('.error1').fadeOut('slow');
      found = false;
    }
    else{
      $('.error1').text('Name Required.');
      $('.error1').fadeIn("slow");
      found = true;
    }
  });

  $('#ac').on('focusout', function(){
    if($('#ac').val() != ""){
      $('.error2').fadeOut('slow');
      found = false;
    }
    else{
      $('.error2').text('Message Required.');
      $('.error2').fadeIn("slow");
      found = true;
    }
  });

  $('#msg').on('focusout', function(){
    if($('#msg').val() != ""){
      $('.error2').fadeOut('slow');
      found = false;
    }
    else{
      $('.error2').text('Message Required.');
      $('.error2').fadeIn("slow");
      found = true;
    }
  });
});

function validateEmail(eVal){
  var val = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  
  if( val.test(eVal)){
      return true;
  }else{
      return false;
  }
}
////////////////////////////////////////////////
function change(obj) {
    var selectBox = obj;
    var selected = selectBox.options[selectBox.selectedIndex].value;
	var textarea = document.getElementById("show_address");
    
    if(selected === "Comments"){
      //alert(selected);
        textarea.style.display = "block";
        //document.getElementById("ac").innerHTML = '<b><textarea name="message" id="msg" class="form-control" placeholder="Comments" rows="3"></textarea></b>'
    }
    else if(selected === "Enquery"){
        textarea.style.display = "block";
        //document.getElementById("ac").innerHTML = '<b><textarea name="message" id="msg" class="form-control" placeholder="Enquery" rows="3"></textarea></b>'
    }
    else{
      textarea.style.display = "none";
    }
    //selected = 'select';
}


function send()
{
   
  var act = document.getElementById("action").value;
  var emailV = document.getElementById("email").value;
  var nameV = document.getElementById("name").value;
  var msgV = document.getElementById("msg").value;
  if(emailV != "" && nameV != "" && msgV != "" && act != "Select")
 { 
  if(act == "Comments" && !found)
  {
    alert("Thank you for your comments");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";

  }
  else
  if(act == "Enquery" && !found)
  {
    alert("Enquery sent, you will hear from us Berea computers soon");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
  }
}
}
function Cancel(obj)
{
  var selectBox = obj
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("msg").value = "";


  var textarea = document.getElementById("show_address");
  textarea.style.display = "none";

  document.getElementById("action").value = "Select";
}
