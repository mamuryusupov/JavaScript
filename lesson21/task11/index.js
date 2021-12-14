const manageClasses = function () {
  document.querySelector('.class').classList.add('.selected');
  document.querySelector('.two').classList.remove('.selected');
  document.querySelector('.three').classList.toggle('.three_done');
  const liElem = document.querySelector('.four').classList.contains('.some-class');
  if (liElem) {
    liElem.classList.add('.another-class');
  }
};
