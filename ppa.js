const $lights_grid = document.querySelector("#lights-grid");
const $all_on = document.querySelector("#all-on");
const $all_off = document.querySelector("#all-off");
const $NUM_light_on = document.querySelector("#NUM-light-on");
const $NUM_light_off = document.querySelector("#NUM-light-off");
const $btn_add_room = document.querySelector("#btn-add-room");
const $light_name = document.querySelector("#light-name");
const $add_form = document.querySelector("#ad-form");
/*
{
	room
	image
	status_text
	switch_button
}
*/
let rooms = [];

function createRoom() {
	let c = rooms.push({
		room: document.createElement("div"),
		btn_on: document.createElement("button"),
		btn_remove: document.createElement("button")
	}) - 1;

	rooms[c].room.classList.add("room");
	rooms[c].btn_on.classList.add("turn-ligth");
	rooms[c].btn_remove.classList.add("remove");
	rooms[c].btn_on.textContent = "Turn ON";
	rooms[c].btn_remove.textContent = "Delete";
	rooms[c].room.appendChild(btn_on);
	rooms[c].room.appendChild(btn_remove);

	rooms[c].btn_on.addEventListener("click", (e) => {
		rooms[c].rooms.classList.add("on");
	});
}