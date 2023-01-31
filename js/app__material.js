const form_material = [].map.call(document.querySelectorAll('.mdc-text-field'), function (e1) {
    return new mdc.textField.MDCTextField.attachTo(e1);
    

});