// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
// let myCreatedDate = new Date(2025, 3, 18);
// console.log(myCreatedDate.toDateString());
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));
let newDate = new Date();
let dayOfWeek = newDate.getDay();
let message = `Day of the week: ${dayOfWeek} and the time is:`;
let formattedTime = newDate.toLocaleString("default", {
  weekday: "long", // Example: Monday
  year: "numeric",
  month: "long", // Example: April
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log(message);
console.log(formattedTime);
