import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleDateSelection(selectedDates[0]);
  },
});

const inputDate = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const resetBtn = document.querySelector("[data-reset]");
const dayEl = document.querySelector("[data-days]");
const hoursEL = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

startBtn.disabled = true;

function handleDateSelection(selectedDate) {
  const currentDateTime = new Date();
  if (selectedDate <= currentDateTime) {
    Notiflix.Notify.warning('Please choose a date in the future');
    return;
  } 
  startBtn.disabled = false;
}

startBtn.addEventListener('click', () => {
  const selectedDate = new Date(inputDate.value);
  startCountdown(selectedDate);
});

function startCountdown(selectedDate) {
  inputDate.disabled = true;
  startBtn.disabled = true;

  const timerInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = selectedDate - currentTime;
    const date = convertMs(timeDifference);
    dayEl.textContent = addLeadingZero(date.days);
    hoursEL.textContent = addLeadingZero(date.hours);
    minutesEl.textContent = addLeadingZero(date.minutes);
    secondsEl.textContent = addLeadingZero(date.seconds);

    if (timeDifference <= 0) {
      dayEl.textContent = '00';
      hoursEL.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      clearInterval(timerInterval);
      Notiflix.Notify.success("Countdown finished!");

      inputDate.disabled = false;
      startBtn.disabled = false;

    } else {
      convertMs(timeDifference);
    }
  }, 1000);
}

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  dayEl.textContent = '00';
  hoursEL.textContent = '00';
  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
  inputDate.value = '';
  inputDate.disabled = false;
  startBtn.disabled = false;
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}
