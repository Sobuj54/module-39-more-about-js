console.log(1);
console.log(2);
console.log(3);
let num = 0;
// setInterval will keep printing until we clearInterval
const intervalId = setInterval(() => {
  num++;
  console.log(num);
  if (num === 10) {
    clearInterval(intervalId);
  }
}, 1000);
// setTimeout will print only once when it reaches given time
setTimeout(() => {
  console.log(10);
}, 5000);
console.log(4);
