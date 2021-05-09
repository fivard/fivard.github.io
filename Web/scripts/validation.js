(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
          return
        }
        let output = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            text: message.value,
            [Symbol.toPrimitive](hint) {
                if (hint === 'string') {
                    return `Name: ${this.name}\nPhone: ${this.phone}\nEmail: ${this.email}\nText: ${this.text}\n`;
                }
                return null;
            }
          }
        alert(output)
        popupClose()
      }, false)
    })
})()