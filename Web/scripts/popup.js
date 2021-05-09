const popupLink = document.querySelector('.popup_link')
const body = document.querySelector('body')
const popup = document.getElementById('popup')
const popupCloseBtn = document.querySelector('.popup_close')

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
	popup.classList.remove('open')
	body.classList.remove('lock')
}
