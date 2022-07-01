import { container } from "./renderCard";
import { clear } from "./renderCard";

export function handlerClickOnSendCard(handler) {
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
  </div>`;

  clear();
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}

export function handlerClickContinue(handler) {
  const btnContinue = document.getElementById("btn-continue");

  btnContinue.removeEventListener("click", handler);
  btnContinue.addEventListener("click", function (e) {
    e.preventDefault();
    const input = getInput();
    const name = input.value;

    handler(name);
  });
}

export function handlerClickCancel(handler) {
  const btnCancel = document.getElementById("btn-cancel");

  btnCancel.removeEventListener("click", handler);
  btnCancel.addEventListener("click", handler);
}

export function handlerFocusInput(handler) {
  const input = getInput();

  input.removeEventListener("focus", handler);
  input.addEventListener("focus", handler);
}

export function handlerBlurInput(handler) {
  const input = getInput();

  input.removeEventListener("blur", function () {});
  input.addEventListener("blur", function () {
    const input = getInput();
    const name = input.value;

    handler(name);
  });
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
