let lastTime = Date.now();
let rTime = 0;
let gamma = 1;
let time = 0;

document.addEventListener('DOMContentLoaded', () => {
  const sliderNode = document.querySelector('#speedSlider');
  
  const computeGamma = () => {
    const percentOfSpeedOfLight = sliderNode.value  
    let gamma = 1/Math.sqrt(1 - Math.pow(percentOfSpeedOfLight,2))
    return gamma
  }

  const relativeTimeNode = document.querySelector('#relativeTime');
  const actualTimeNode = document.querySelector('#stationaryTime');
  const descriptionParagraph = document.querySelector('#sliderDescription');
  
  const renderTimers = ({ rTime, time }) => {
    relativeTimeNode.innerText = rTime;
    actualTimeNode.innerText = time; 
    descriptionParagraph.innerText = sliderNode.value;
  };

  const tick = () => {
    const now = Date.now();
    const sinceLast = now - lastTime;
    computeGamma()
    gamma = computeGamma()
    time += sinceLast;
    rTime += (sinceLast / gamma);
    renderTimers({ 
      rTime: (rTime / 1000).toFixed(0), 
      time: (time / 1000).toFixed(0), 
    });
    lastTime = now;
  };

  setInterval(tick, 100);
});
