// export const finishForm = function () {
//   const formElem = document.querySelector('.login-form');
//   const passwordForm = document.querySelector('input');

//   const newAttribute = document.createElement('input');
//   newAttribute.setAttribute('type', 'text');
//   newAttribute.setAttribute('name', 'login');
//   formElem.prepend(newAttribute);

//   passwordForm.setAttribute('type', password);
// };
export const finishForm = () => {
  const formElem = document.querySelector('.login-form');
  const inputPasswordElem = document.querySelector('input');

  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');
  formElem.prepend(inputElem);

  inputPasswordElem.setAttribute('type', 'password');
};
