"use strict";
let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let heading = document.querySelector(".title");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let clearBtn = document.querySelector(".clear");
let kir = document.querySelector(".small__box");

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let s1 = Number(sec.value);
  let m1 = Number(min.value);
  let h1 = Number(hour.value);
  let d1 = Number(day.value);
  if (
    s1 >= 0 &&
    s1 < 60 &&
    m1 >= 0 &&
    m1 < 60 &&
    h1 >= 0 &&
    h1 < 24 &&
    d1 >= 0
  ) {
    if (s1 !== 0 || m1 !== 0 || h1 !== 0 || d1 !== 0) {
      let vaqt = setInterval(function () {
        startBtn.disabled = true;
        startBtn.style.backgroundColor = "rgb(129, 243, 154)";
        let s = Number(sec.value);
        let m = Number(min.value);
        let h = Number(hour.value);
        let d = Number(day.value);
        if (d == 0 && m == 0 && s == 0 && h == 0) {
          heading.textContent = "Sizning vaqtingiz tugadi";
          heading.style.color = "red";
          clearInterval(vaqt);
        }
        sec.value = String(s - 1).padStart(2, 0);
        if (sec.value == "-1") {
          min.value = String(m - 1).padStart(2, 0);
          sec.value = 59;
        }
        if (min.value == "-1") {
          hour.value = String(h - 1).padStart(2, 0);
          min.value = 59;
        }
        if (hour.value == "-1") {
          day.value = String(d - 1).padStart(2, 0);
          hour.value = 23;
        }
        if (day.value == "-1") {
          min.value = "00";
          sec.value = "00";
          hour.value = "00";
          day.value = "00";
        }
      }, 1000);
    } else {
      heading.textContent = "Qiymat kiriting";
      heading.style.color = "red";
    }
  } else {
    heading.textContent = "Siz xato son kiritdingiz";
    heading.style.color = "red";
  }
});
