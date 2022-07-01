import { clear } from "./renderCard";



function renderSuccessMessage (nombre) {
  const root = document.querySelector(".container-ppal")
  const markup = `
    <h1>Tarjeta enviada a: ${nombre}</h1>
`

  root.innerHTML = "";
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}


export default renderSuccessMessage
