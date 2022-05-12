const textElement = document.getElementById('text')
const monthElement = document.getElementById('month')
const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");



const month = ["Jan","Feb","March","April","May","June","July","August","September","October","November","December"];

let showDate = true;

function animate() {
  const date = new Date();
  
  const months = month[date.getMonth()];
  const day = date.getDate();
  const amorpm =date.getHours() >= 12 ? 'PM': 'AM'
  let hour =Math.floor(date.getHours() + date.getMinutes() / 60)
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds() + date.getMilliseconds() / 1000;
  
  textElement.textContent = showDate ? day+' '+months: amorpm
  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);

  requestAnimationFrame(animate);

}

requestAnimationFrame(animate);
textElement.addEventListener('click',()=>{
  showDate=!showDate
})