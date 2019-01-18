let moment = require('moment');
let momentDurationFormatSetup = require("moment-duration-format");

document.addEventListener('DOMContentLoaded', () => {
  const sliderNode = document.querySelector('.speedSlider');
  (function() {
    let lastTime = Date.now();
    let rTime = 0;
    let gamma = 1;
    let time = 0;

    const computeGamma = () => {
      const percentOfSpeedOfLight = sliderNode.value
      let gamma = 1/Math.sqrt(1 - Math.pow(percentOfSpeedOfLight,2))
      return gamma
    }

    const relativeTimeNode = document.querySelector('.container1 .relativeTime');
    const stationaryTimeNode = document.querySelector('.container1 .stationaryTime');
    const descriptionParagraph = document.querySelector('.container1 .sliderDescription');
    const resetButton = document.querySelector('.container1 .reset-button');

    resetButton.addEventListener("click", () => {
      rTime = 0,
      time = 0;
      renderTimers(0,0);
    })

    const renderTimers = (rTime, time) => {
      relativeTimeNode.innerText = moment.duration(rTime).format('mm:ss.SSS');
      stationaryTimeNode.innerText = moment.duration(time).format('mm:ss.SSS');
      descriptionParagraph.innerText = sliderNode.value;
    };

    const tick = () => {
      const now = Date.now();
      const sinceLast = now - lastTime;
      gamma = computeGamma()
      time += sinceLast;
      rTime += (sinceLast / gamma);
      renderTimers( rTime, time);
      lastTime = now;
    };

    setInterval(tick, 100);
  })();
  (function() {
    let lastTime = Date.now();
    let rTime = 0;
    let gamma = 1;
    let time = 0;

    const computeGamma = () => {
      const percentOfSpeedOfLight = sliderNode.value
      let gamma = 1/Math.sqrt(1 - Math.pow(percentOfSpeedOfLight,2))
      return gamma
    }

    const relativeTimeNode = document.querySelector('.container2 .relativeTime');
    const stationaryTimeNode = document.querySelector('.container2 .stationaryTime');
    const descriptionParagraph = document.querySelector('.container2 .sliderDescription');
    const resetButton = document.querySelector('.container2 .reset-button');

    resetButton.addEventListener("click", () => {
      rTime = 0,
      time = 0;
      renderTimers(0,0);
    })

    const renderTimers = (rTime, time) => {
      relativeTimeNode.innerText = moment.duration(rTime).format('mm:ss.SSS');
      stationaryTimeNode.innerText = moment.duration(time).format('mm:ss.SSS');
      descriptionParagraph.innerText = sliderNode.value;
    };

    const tick = () => {
      const now = Date.now();
      const sinceLast = now - lastTime;
      gamma = computeGamma()
      time += sinceLast;
      rTime += (sinceLast / gamma);
      renderTimers( rTime, time);
      lastTime = now;
    };

    setInterval(tick, getRandomArbitrary(100, 1000));
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  })();
});

