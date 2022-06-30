export function container() {
  return document.querySelector(".container");
}
const root = container();
export function renderCard() {
  const markup = `
    <div class="card">
      <h1 class="title">Tarjeta de regalo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim
        reprehenderit repellat necessitatibus sequi sint, doloremque
        tempora, minima quo facilis qui rem earum magni minus dolorem vitae.
        Dignissimos, quisquam porro.
      </p>
      <button class="btn">ENVIAR TARJETA</button>
    </div>`;

  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}

export function clear() {
  root.innerHTML = "";
}
