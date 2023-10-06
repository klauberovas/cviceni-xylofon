console.log('Funguju');

const buttons = document.querySelectorAll('.kamen');

const changeTitle = (e) => {
  const zvuk = new Audio(`tony/${e.target.textContent}.mp3`);
  zvuk.play();

  const title = document.querySelector('h1');
  title.textContent = e.target.textContent;
};

buttons.forEach((button) => {
  button.addEventListener('click', changeTitle);
});
