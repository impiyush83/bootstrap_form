$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstName: {
        required:true;
        minlength:3;
        maxlength:50;
        pattern:"^[a-zA-Z. ]*$;"
      },
      lastName: {
        required:true;
        minlength:3;
        maxlength:50;
        pattern:"^[a-zA-Z. ]*$;"
      },
      validationDefault03:{
        required:true;
        minlength:5;
        maxlength:220
      },
      validationDefault04:{
        required:true;
        minlength:3;
        maxlength:50;
      },
      validationDefault05:{
        required:true;
        minlength:3;
        maxlength:50;
        pattern:"^[0-9a-zA-Z-. ]*$"
      },
      validationDefault06:"required",
      example-date-input:{
        required:true;
        Date:true
      },
      linkedin:{
        required:false;
        pattern:"^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
      },
      insta:{
        required:false;
        pattern:"^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
      }
    },
    // Specify validation error messages
    messages: {
      firstName: "Please enter your firstname",
      lastName: "Please enter your lastname",
      
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
