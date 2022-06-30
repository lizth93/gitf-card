import { container } from "../views/renderCard";
import { clear } from "../views/renderCard";

export function handlerClickOnSendCard() {
  const btnEnviar = document.querySelector(".btn");
  if (!btnEnviar) {
    return;
  }

  btnEnviar.addEventListener("click", alert);
}

function alert() {
  const root = container();
  const markup = `
    <div class="card">
      <h1 class="title">Deseas enviar la tarjeta?</h1>
      <p>
        Escribe el nombre de la persona a quien quieres enviar la tarjeta:
      </p>
      <form>
        <input class="input-name" type="text" />
        <button type="button" class="btn">CANCELAR</button>
        <button type="submit" class="btn">CONTINUAR</button>
      </form>
  </div>`;

  clear();
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}
