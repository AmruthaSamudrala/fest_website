
let overlay = document.getElementsByClassName("login-overlay")[0];

function openRegister() {
  overlay.style.top = "0px";
  setTimeout(() => {
    overlay.style.background = "#fffa";
    overlay.style.backdropFilter = "blur(3px)";
  }, 400);
}

function closeRegister() {
  overlay.style.background = "#fff0";
  overlay.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    overlay.style.top = "-100%";
  }, 400);
}
