const popupLink = document.querySelector('.popup_link')
const body = document.querySelector('body')
const popup = document.getElementById('popup')
const popupCloseBtn = document.querySelector('.popup_close')

let name = document.getElementById("popup-name")
let phone = document.getElementById("popup-phone")
let email = document.getElementById("popup-email")
let message = document.getElementById("popup-message")

popupLink.addEventListener("click", function() {
	popup.classList.add('open');
	body.classList.add('lock');
	popup.addEventListener("click", function(e){
		if (!e.target.closest('.popup_content'))
			popupClose()
	})
})

popupCloseBtn.addEventListener("click", function(){
	popupClose()
})

function popupClose(){
	name.value = ''
	phone.value = ''
	email.value = ''
	message.value = ''
	popup.classList.remove('open')
	body.classList.remove('lock')
}
