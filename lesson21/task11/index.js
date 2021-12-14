export { manageClasses };

const manageClasses = () => {
  const firstElem = document.querySelector('.class');
  firstElem.classList.add('selected');

  const secondElem = document.querySelector('.two');
  secondElem.classList.remove('selected');

  const thirdElem = document.querySelector('.three');
  thirdElem.classList.toggle('three_done');

  const fourthElem = document.querySelector('.four');
  if (fourthElem.classList.contains('some-class')) {
    liElem.classList.add('another-class');
  }
};
