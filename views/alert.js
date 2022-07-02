import { container } from "./renderCard";
import { clear } from "./renderCard";

export function handleSendCardClick(handler) {
  const btnSend = document.querySelector(".btn");
  if (!btnSend) {
    return;
  }

  btnSend.removeEventListener("click", handler);
  btnSend.addEventListener("click", handler);
}

export function renderAlert() {
  const root = container();
  const markup = `
  <section class="container">
    <div class="card">
      <h1 class="title">Deseas enviar la tarjeta?</h1>
      <p>
        Escribe el nombre de la persona a quien quieres enviar la tarjeta:
      </p>
      <form>
        <input class="input-name" type="text" placeholder="Nombre" required/>
        <div class="show-error">&nbsp;</div>       
        <button type="button" id="btn-cancel" class="btn">CANCELAR</button>
        <button type="button" id="btn-continue" class="btn">CONTINUAR</button>
      </form>
  </div>
  </section>`;

  clear();
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}

export function handleContinueClick(handler) {
  const btnContinue = document.getElementById("btn-continue");

  btnContinue.removeEventListener("click", handler);
  btnContinue.addEventListener("click", handler);
}

export function getName() {
  return getInput().value;
}

export function handleCancelClick(handler) {
  const btnCancel = document.getElementById("btn-cancel");

  btnCancel.removeEventListener("click", handler);
  btnCancel.addEventListener("click", handler);
}

export function handleFocusInput(handler) {
  const input = getInput();

  input.removeEventListener("focus", handler);
  input.addEventListener("focus", handler);
}

export function handleBlurInput(handler) {
  const input = getInput();

  input.removeEventListener("blur", handler);
  input.addEventListener("blur", handler);
}

function getInput() {
  return document.querySelector(".input-name");
}

export function renderError(
  message = "*El campo esta vacío, escribe un nombre para poder enviar la tarjeta"
) {
  const root = document.querySelector(".show-error");

  const markup = `
  <label class="message">${message}</label></br>`;

  root.innerHTML = "";
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}
