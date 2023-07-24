import Notiflix from 'notiflix';
const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;

  for (let i = 1; i <= amount.value; i+=1) {
    const position = i;
    const promiseDelay = parseInt(delay.value) + (i - 1) * parseInt(step.value);

    if (parseInt(delay.value) < 0 || parseInt(step.value) < 0 || parseInt(amount.value) <= 0) {
    Notiflix.Notify.failure('Please enter positive values for delay, step, and amount.');
    return;
    }

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
