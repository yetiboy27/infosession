var dom0 = document.querySelector('#form82 #field0');
    var field0 = new LiveValidation(dom0, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field0.add(Validate.Presence, {
      failureMessage:"This field is required"}
              );
    var dom1 = document.querySelector('#form82 #field1');
    var field1 = new LiveValidation(dom1, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field1.add(Validate.Presence, {
      failureMessage:"This field is required"}
              );
    var dom2 = document.querySelector('#form82 #field2');
    var field2 = new LiveValidation(dom2, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field2.add(Validate.Presence, {
      failureMessage:"This field is required"}
              );
    field2.add(Validate.Format, {
      pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "A valid email address is required"}
              );
    var dom3 = document.querySelector('#form82 #field3');
    var field3 = new LiveValidation(dom3, {
      validMessage: "", onlyOnBlur: true}
                                   );
    var dom4 = document.querySelector('#form82 #field4');
    var field4 = new LiveValidation(dom4, {
      validMessage: "", onlyOnBlur: true}
                                   );
    field4.add(Validate.Presence, {
      failureMessage:"Please choose an event."}
              );
    var dom27 = document.querySelector('#form82 #field27');
    var field27 = new LiveValidation(dom27, {
      validMessage: "", onlyOnBlur: true}
                                    );
    function resetSubmitButton(e){
      var submitButtons = e.target.form.getElementsByClassName('submit-button');
      for(var i=0;i<submitButtons.length;i++){
        submitButtons[i].disabled = false;
      }
    }
    function addChangeHandler(elements){
      for(var i=0; i<elements.length; i++){
        elements[i].addEventListener('change', resetSubmitButton);
      }
    }
    var form = document.getElementById('form82');
    addChangeHandler(form.getElementsByTagName('input'));
    addChangeHandler(form.getElementsByTagName('select'));
    addChangeHandler(form.getElementsByTagName('textarea'));