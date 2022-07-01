import { renderCard } from "../views/renderCard";
// import { handlerClickOnSendCard } from "../views/alert";
import {renderAlert, handlerClickOnSendCard} from "../views/alert"

export function load() {
  renderCard();
  handlerRenderAlert();
}
const controlRenderAlert = function(){
  renderAlert()
}


const handlerRenderAlert = function(){
  handlerClickOnSendCard(controlRenderAlert)
}


