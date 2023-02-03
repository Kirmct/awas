const menuOpener = document.querySelector(`.menu-opener`);
console.log(menuOpener);

function abrirMenu(event) {
  const menuLateral = document.querySelector(`.menu nav`);
  if (menuLateral.style.display == "none") {
    menuLateral.style.display = "initial";
  } else {
    menuLateral.style.display = "none";
  }
}

menuOpener.addEventListener(`click`, abrirMenu);
