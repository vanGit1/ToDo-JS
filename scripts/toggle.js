let checkbox = document.querySelector('.theme-checkbox');

if (localStorage.getItem('theme') == 'true') {
	theme.setAttribute('href', 'CSS/dark.css');
	checkbox.checked = true;
}
checkbox.onchange = function () {
	if (this.checked) {
		localStorage.setItem('theme', true);
		theme.setAttribute('href', 'CSS/dark.css');
	} else {
		localStorage.setItem('theme', false);
		theme.setAttribute('href', 'CSS/light.css');
	}
};
