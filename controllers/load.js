import { renderCard } from "../views/renderCard";
import {
  renderAlert,
  handleSendCardClick,
  handleContinueClick,
  handleCancelClick,
  renderError,
  handleFocusInput,
  handleBlurInput,
  getName,
} from "../views/alert";
import { renderSuccessMessage, handleClickBack } from "../views/success";

export function load() {
  renderCard();
  handleSendCardClick(showForm);
}

const showForm = function () {
  renderAlert();
  handleContinueClick(submit);
  handleCancelClick(cancel);
  handleFocusInput(clearError);
  handleBlurInput(renderErrorIfInputInvalid);
};

const submit = function () {
  const name = getName();

  if (name.trim() === "") {
    renderError();
  } else {
    renderSuccessMessage(name);
    handleClickBack(cancel);
  }
};

function cancel() {
  console.log("cancel");
  load();
}

const clearError = function () {
  let message = "";
  renderError(message);
};

const renderErrorIfInputInvalid = function () {
  const name = getName();

  if (name.trim() === "") {
    renderError();
  }
};
