let index = 0;
document.addEventListener("DOMContentLoaded", () => {
  const mySeconds = document.querySelector(".seconds");
  const myMunites = document.querySelector(".munites");
  const myHours = document.querySelector(".hours1");

  const time = new Date();

  let hours = parseInt(time.getHours());
  let minutes = parseInt(time.getMinutes());
  let seconds = parseInt(time.getSeconds());

  hours < 10
    ? (myHours.textContent = `0${hours}`)
    : (myHours.textContent = hours);
  minutes < 10
    ? (myMunites.textContent = `0${minutes}`)
    : (myMunites.textContent = minutes);
  seconds < 10
    ? (mySeconds.textContent = `0${seconds}`)
    : (mySeconds.textContent = seconds);

  document.querySelector("form").onsubmit = () => {
    const updateHours = document.querySelector("#hr");
    const updateMinutes = document.querySelector("#mi");
    const updateSeconds = document.querySelector("#sc");

    if (updateHours.value.length > 0) {
      if (parseInt(updateHours.value) < 0 || parseInt(updateHours.value) > 24) {
        alert("Hours must not be less than 0 or greater than 24");
      } else {
        parseInt(updateHours.value) < 10
          ? (myHours.textContent = `0${parseInt(updateHours.value)}`)
          : (myHours.textContent = updateHours.value);
      }
    }

    if (updateMinutes.value.length > 0) {
      if (
        parseInt(updateMinutes.value) < 0 ||
        parseInt(updateMinutes.value) >= 60
      ) {
        alert("Minutes must not be less than 0 or greater than 60");
      } else {
        parseInt(updateMinutes.value) < 10
          ? (myMunites.textContent = `0${parseInt(updateMinutes.value)}`)
          : (myMunites = updateMinutes.value);
      }
    }

    if (updateSeconds.value.length > 0) {
      if (
        parseInt(updateSeconds.value) < 0 ||
        parseInt(updateSeconds.value) >= 60
      ) {
        alert("Seconds must not be less than 0 or greater than 60");
      } else {
        parseInt(updateSeconds.value) < 10
          ? (mySeconds.textContent = `0${parseInt(updateSeconds.value)}`)
          : (mySeconds.textContent = updateSeconds.value);
      }
    }

    updateHours.value = "";
    updateMinutes.value = "";
    updateSeconds.value = "";

    return false;
  };

  function countTime() {
    let seconds = parseInt(document.querySelector(".seconds").innerHTML);
    let minutes = parseInt(document.querySelector(".munites").innerHTML);
    let hours = parseInt(document.querySelector(".hours1").innerHTML);

    seconds++;
    seconds < 10
      ? (mySeconds.textContent = `0${seconds}`)
      : (mySeconds.textContent = seconds);
    if (seconds >= 60) {
      minutes++;
      minutes < 10
        ? (myMunites.textContent = `0${minutes}`)
        : (myMunites.textContent = minutes);
      mySeconds.textContent = "00";
    }
    if (minutes == 60) {
      hours++;
      hours == 24 ? (hours = 0) : (hours = hours);
      hours < 10
        ? (myHours.textContent = `0${hours}`)
        : (myHours.textContent = hours);
      myMunites.textContent = "00";
    }
  }
  let myText;
  const actualHour = new Date();
  const myActualHour = parseInt(actualHour.getHours());

  if (myActualHour <= 12)
    myText = "Good Morning. Jodick wishes you all the best, T H A N K S!!";
  if (myActualHour <= 16 && myActualHour > 12)
    myText = "Jodick wishes you a sweet Afternoon, T H A N K S !!";
  if (myActualHour < 22 && myActualHour > 16)
    myText = "Jodick wishes you a good Evening, T H A N K S !!";
  if (myActualHour >= 22) {
    myText = "Jodick wishes you a very wonderful night, T H A N K S !!";
  }

  let displayWelcomeMessage = setInterval(() => {
    document.querySelector(".worDisplay").textContent = myText.slice(0, index);
    index++;
    if (index > myText.length) {
      setTimeout(() => {
        clearInterval(displayWelcomeMessage);
        document.querySelector(".welcome").innerHTML = "";
      }, 3000);
    }
  }, 50);

  setInterval(countTime, 1000);
});
