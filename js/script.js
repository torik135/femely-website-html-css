const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

const menuToggle = () => {
	btn.classList.toggle('open')
	nav.classList.toggle('hidden')
	document.body.classList.toggle('no-scroll')
}


btn.addEventListener('click', menuToggle)