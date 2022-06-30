import { renderCard } from "../views/renderCard";
import { handlerClickOnSendCard } from "./alert";

export function load() {
  renderCard();
  handlerClickOnSendCard();
}
