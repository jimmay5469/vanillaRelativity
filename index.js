let moment = require('moment');
let momentDurationFormatSetup = require("moment-duration-format");

let start = Date.now();

document.addEventListener('DOMContentLoaded', () => {
  const sliderNode = document.querySelector('#speedSlider');

  const computeGamma = () => {
    const percentOfSpeedOfLight = sliderNode.value
    return 1 / Math.sqrt(1 - Math.pow(percentOfSpeedOfLight, 2))
  }

  const relativeTimeNode = document.querySelector('#relativeTime');
  const stationaryTimeNode = document.querySelector('#stationaryTime');
  const descriptionParagraph = document.querySelector('#sliderDescription');
  const resetButton = document.querySelector('.reset-button');

  resetButton.addEventListener("click", () => {
    start = Date.now();
    renderTimers(0,0);
  })

  const renderTimers = (rTime, time) => {
    relativeTimeNode.innerText = moment.duration(rTime).format('mm:ss.SSS');
    stationaryTimeNode.innerText = moment.duration(time).format('mm:ss.SSS');
    descriptionParagraph.innerText = sliderNode.value;
  };

  const tick = () => {
    const now = Date.now();
    const sinceStart = now - start;
    const gamma = computeGamma()
    const time = sinceStart;
    const rTime = (sinceStart / gamma);
    renderTimers(rTime, time);
  };

  setInterval(tick, 100);
});

