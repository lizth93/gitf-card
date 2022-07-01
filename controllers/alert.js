import { container } from "../views/renderCard";
import { clear } from "../views/renderCard";

export function handlerClickOnSendCard() {
  const btnSend = document.querySelector(".btn");
  if (!btnSend) {
    return;
  }

  btnSend.addEventListener("click", alert);
}


function alert() {
  console.log("executing alert")
  const root = container();
  const markup = `
    <div class="card">
      <h1 class="title">Deseas enviar la tarjeta?</h1>
      <p>
        Escribe el nombre de la persona a quien quieres enviar la tarjeta:
      </p>
      <form>
        <input class="input-name" type="text" required/>
        <div class="show-error">&nbsp;</div>       
        <button type="button" class="btn btn-cancel">CANCELAR</button>
        <button type="submit" class="btn btn-continue">CONTINUAR</button>
      </form>
  </div>`;

  clear();
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);

  handlerClickSubmit()
}


function handlerClickSubmit() {
  handlerFocusInput()
  const btnContinue = document.querySelector(".btn-continue")
  btnContinue.removeEventListener("click", validationInputSubmit)
  btnContinue.addEventListener("click",validationInputSubmit)
}

function handlerFocusInput(){
  const input = getInput()

  input.removeEventListener("focus", isFocus)
  input.addEventListener("focus", isFocus)

  input.removeEventListener("blur", isBlur)
  input.addEventListener("blur", isBlur)
}

function isFocus(){
  message=""
  renderError()
 
}

function isBlur(){
  const name = getInput().value
  if(name.trim()==="") {
    message="Por favor ingrese un nombre"
    renderError()
  }
  
}

function getInput(){
  return  document.querySelector(".input-name")
}


let message = ""

function validationInputSubmit (e){
  e.preventDefault()

  const name =  document.querySelector(".input-name").value

  
  if (name.trim()===""){
    message="Por favor ingrese un nombre"
    renderError()
  } 

}

function renderError(){
  const root = document.querySelector(".show-error")
  
  const markup = `
  <label class="message">${message}</label></br>`

  root.innerHTML = "";
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  root.insertAdjacentElement("beforeend", htmlObject);
}

