let scoreHomeEl = document.getElementById("score-home");
let scoreHome = 0;

function add1() {
  scoreHome += 1;
  scoreHomeEl.textContent = scoreHome;
}
function add2() {
  scoreHome += 2;
  scoreHomeEl.textContent = scoreHome;
}
function add3() {
  scoreHome += 3;
  scoreHomeEl.textContent = scoreHome;
}

let scoreGuestEl = document.getElementById("score-guest");
let scoreGuest = 0;

function add1Guest() {
  scoreGuest += 1;
  scoreGuestEl.textContent = scoreGuest;
}
function add2Guest() {
  scoreGuest += 2;
  scoreGuestEl.textContent = scoreGuest;
}
function add3Guest() {
  scoreGuest += 3;
  scoreGuestEl.textContent = scoreGuest;
}
