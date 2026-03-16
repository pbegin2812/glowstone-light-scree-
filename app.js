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
		est = true;
		$switch.textContent = "Off";
		$menuspan.textContent = "Off";
		$glowstone.setAttribute("src", "assets/glowstone-on.webp");
		$body.classList.remove("light-off");
		$body.classList.add("light-on");
	} else {
		est = false;
        $glowstone.setAttribute("src", "assets/glowstone-off.webp");
		$switch.textContent = "On";
		$menuspan.textContent = "On";
		$body.classList.remove("light-on");
		$body.classList.add("light-off");
	}
});
