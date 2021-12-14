export { manageClasses };
const manageClasses = () => {
  const liElements1 = document.querySelector('.one');
  liElements1.classList.add('selected');
  const liElements2 = document.querySelector('.two');
  liElements2.classList.remove('selected');
  const liElements3 = document.querySelector('.three');
  liElements3.classList.toggle('three_done');
  const liElements4 = document.querySelector('.four');
  if (liElements4.classList.contains('some-class')) {
    liElements4.classList.add('another-class');
  }
};
