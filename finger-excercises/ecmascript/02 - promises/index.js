// Hint: use setInterval, create a new Promise and measure time with Date.now()
const BASE_TIME = 500;
const BASE_MAX = BASE_TIME + 100;

export function delay(time) {
  const maxTime = time + 100;
  const minTime = time - 100;
  // eslint-disable-next-line no-mixed-operators
  const delayTime = Math.floor(Math.random() * ((maxTime - minTime + 1)) + minTime);
  return new Promise((resolve, reject) => ((delayTime > BASE_MAX) ?
    reject(new Error('This time is too much !')) :
    setTimeout(resolve(delayTime), delayTime)));
}

export const asyncDelay = async time => delay(time);
