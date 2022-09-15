/* Script to update some time-related fields. */

document.addEventListener("DOMContentLoaded", () => {
  let year = (new Date()).getFullYear();
  let age = document.getElementById("age");

  if (age != undefined) {
    age.innerHTML = year - 1997;
  }

  let currentYear = document.getElementById("current-year");
  currentYear.innerHTML = year;
});