const $lights_grid = document.querySelector("#lights-grid");
const $all_on = document.querySelector("#all-on");
const $all_off = document.querySelector("#all-off");
const $NUM_light_on = document.querySelector("#NUM-light-on");
const $NUM_light_off = document.querySelector("#NUM-light-off");
const $btn_add_room = document.querySelector("#btn-add-room");
const $light_name = document.querySelector("#light-name");
const $add_form = document.querySelector("#ad-form");
let on = 0;
let off = 0;
let tab = [];
$add_form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = new FormData($add_form);
	if (data.get("thenName").length > 2) {
		const room = create_room(data.get("thenName"));
		$lights_grid.appendChild(room);
		tab.push(data.get("thenName"));
	}
	$light_name.value = "";
});
function create_room(text) {
	off++;
	$NUM_light_on.textContent = on;
	$NUM_light_off.textContent = off;
	let isoff = true;
	const room = document.createElement("div");
	const img = document.createElement("img");
	const p = document.createElement("p");
	const h5 = document.createElement("h5");
	const btn_on = document.createElement("button");
	const btn_remove = document.createElement("button");
	room.classList.add("room");
	img.classList.add("light");
	p.classList.add("namee");
	h5.classList.add("itsONorOFF");
	btn_on.classList.add("turn-ligth");
	btn_remove.classList.add("remove");
	p.textContent = text;
	h5.textContent = "off";
	btn_on.textContent = "Turn ON";
	btn_remove.textContent = "Delete";
	img.setAttribute("src", "assets/glowstone-off.webp");
	room.appendChild(img);
	room.appendChild(p);
	room.appendChild(h5);
	room.appendChild(btn_on);
	room.appendChild(btn_remove);
	btn_on.addEventListener("click", () => {
		if (isoff) {
			img.setAttribute("src", "assets/glowstone-on.webp");
			h5.textContent = "on";
			room.classList.add("ligth-on");
			btn_on.textContent = "Turn OFF";
			isoff = false;
			off--;
			on++;
			$NUM_light_on.textContent = on;
			$NUM_light_off.textContent = off;
		} else {
			img.setAttribute("src", "assets/glowstone-off.webp");
			h5.textContent = "off";
			room.classList.remove("ligth-on");
			btn_on.textContent = "Turn ON";
			isoff = true;
			on--;
			off++;
			$NUM_light_on.textContent = on;
			$NUM_light_off.textContent = off;
		}
	});
	btn_remove.addEventListener("click", () => {
		room.remove();
		if (isoff) {
			off--;
			$NUM_light_off.textContent = off;
		} else {
			on--;
			$NUM_light_on.textContent = on;
		}
		for (let i = 0; i < ta$.length; i++) {
			if (tab[i] === text) {
				tab.remove();
				break;
			}
		}
	});
	$all_on.addEventListener("click", () => {
		img.setAttribute("src", "assets/glowstone-on.webp");
		h5.textContent = "on";
		room.classList.add("ligth-on");
		btn_on.textContent = "Turn OFF";
		isoff = false;
		on = tab.length;
		off = 0;
		$NUM_light_on.textContent = tab.length;
		$NUM_light_off.textContent = 0;
	});
	$all_off.addEventListener("click", () => {
		img.setAttribute("src", "assets/glowstone-off.webp");
		h5.textContent = "off";
		room.classList.remove("ligth-on");
		btn_on.textContent = "Turn ON";
		isoff = true;
		on = 0;
		off = tab.length;
		$NUM_light_on.textContent = 0;
		$NUM_light_off.textContent = tab.length;
	});
	return room;
}
