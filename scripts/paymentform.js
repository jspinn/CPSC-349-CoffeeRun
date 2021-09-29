(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-payment-info="form"]';
  var FormHandler = App.FormHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    console.log(data);
    
    var $paymentModal = $('<div></div>', {
      'id': 'payment-modal',
      'class': 'modal'
    });

    var $label = $('<label></label>');

    var message = 'Thank you for your payment, ' + data.title;
    message += ' ' + data.username;

    $label.append(message);
    $paymentModal.append($label);

    $paymentModal.modal();
  });

  console.log(formHandler);
})(window);