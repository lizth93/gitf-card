export function renderSuccessMessage(nombre) {
  const root = document.querySelector(".container-ppal");
  const markup = `
      <h1 class="success">Tarjeta enviada a:<span class="name"> ${nombre}! </span></h1>
      <button class="btn back">Regresar</button>

`;

  root.innerHTML = "";
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}

export function handleClickBack(handler) {
  const back = document.querySelector(".back");
  console.log(back, "click on back");

  back.removeEventListener("click", handler);
  back.addEventListener("click", handler);
}
