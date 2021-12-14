export const finishForm = function () {
  const formElem = document.querySelector('form');
  const newAttribute = document.createElement('input');
  newAttribute.setAttribute('type', text);
  newAttribute.setAttribute('name', 'login');
  formElem.prepend(newAttribute);

  const passwordForm = document.querySelector('input');
  passwordForm.setAttribute('type', password);
};
