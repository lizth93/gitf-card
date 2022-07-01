import { renderCard } from "../views/renderCard";
import {
  renderAlert,
  handlerClickOnSendCard,
  handlerClickContinue,
  handlerClickCancel,
  renderError,
  handlerFocusInput,
  handlerBlurInput,
} from "../views/alert";

export function load() {
  renderCard();
  handlerRenderAlert();
}

const handlerRenderAlert = function () {
  handlerClickOnSendCard(controlRenderAlert);
};

const controlRenderAlert = function () {
  renderAlert();
  eventButtonsOnTheAlert();
};

const eventButtonsOnTheAlert = function () {
  handlerClickContinue(controlValidationInput);
  handlerClickCancel(controlCancelEvent);
  handlerFocusInput(controlEventFocus);
  handlerBlurInput(controlEventBlur);
};

const controlValidationInput = function (name) {
  if (name.trim() === "") {
    renderError();
  } else {
    let message = "";
    renderError(message);
  }
};
function controlCancelEvent() {
  load();
}

const controlEventFocus = function () {
  let message = "";
  renderError(message);
};

const controlEventBlur = function (name) {
  if (name.trim() === "") {
    renderError();
  }
};
