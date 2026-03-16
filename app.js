const $light = document.querySelector("#light");
const $menu = document.querySelector("#menu");
const $form = document.querySelector("form");
const $switch = document.querySelector("#menu-code-status");
const $glowstone = document.querySelector("#glowstone");
const $body = document.querySelector("body");
const $menuspan = document.querySelector("#menu-span-status");
let est = false;

$light.addEventListener("click", () => {
	$menu.showModal();
});

$form.addEventListener("submit", () => {
	if (est == false) {
		$switch.textContent = "Off";
		$menuspan.textContent = "Off";
		est = true;
		$glowstone.setAttribute("src", "assets/glowstone-on.webp");
		$body.classList.remove("light-off");
		$body.classList.add("light-on");
	} else {
		$switch.textContent = "On";
		$menuspan.textContent = "On";
		est = false;
		$glowstone.setAttribute("src", "assets/glowstone-off.webp");
		$body.classList.remove("light-on");
		$body.classList.add("light-off");
	}
});
