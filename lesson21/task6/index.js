export const setButton = function (buttonText) {
  const butSet = (document.querySelector('body').innerHTML = `<button>${buttonText}</button>`);
  return butSet;
};
