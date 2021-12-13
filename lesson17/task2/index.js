const callbackPromp = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferedPrompt(ms) {
    // использовали bind чтобы не потерять контекст
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPromp.showDeferedPrompt(5000);

// нативный метод timeout
// принимает коллбек и время запуска
// setTimeout(() => {
//   console.log('Keep it up');
// }, 10000);
