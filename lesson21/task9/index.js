export const finishList = () => {
  const unorderedList = document.querySelector('ul');
  const firstItem = document.createElement('li');

  firstItem.textContent = '1';
  unorderedList.prepend(firstItem);

  const fourItem = document.createElement('li');
  fourItem.textContent = '4';

  const fifthItem = document.querySelector('.special');
  fifthItem.before(fourItem);

  const sixthItem = document.createElement('li');
  sixthItem.textContent = '6';
  fifthItem.after(sixthItem);

  const eightthItem = document.createElement('li');
  eightthItem.textContent = '8';
  unorderedList.append(eightthItem);
};
