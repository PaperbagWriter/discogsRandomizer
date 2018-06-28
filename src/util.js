export function randomResultFromArray(array) {
    return array && array[Math.floor(Math.random() * array.length)];
  }