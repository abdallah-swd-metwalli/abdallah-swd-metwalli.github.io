let span = document.querySelector(".up");
let span2 = document.querySelector(".up-w");
let ilanguage = document.querySelector(".language");

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  this.scrollY >= 800 ? span.classList.add("show") : span.classList.remove("show");
  this.scrollY >= 800 ? span2.classList.add("show-w") : span2.classList.remove("show-w");
  this.scrollY >= 800 ? ilanguage.style.display = "none" : ilanguage.style.display = "block";
};

function googleTranslateElementInit(){
  new google.translate.TranslateElement(
    {pageLanguage: "en"},
    "google_translate_element"
  );
}

let allMoreOne = document.querySelectorAll(".more-one");
let allMorePOne = document.querySelectorAll(".span-more-one");

allMoreOne.forEach(function (ele) {
  ele.onclick = function () {
    document.getElementById("span-more-one").style.display = "block";
    document.getElementById("more-one").style.display = "none";
  }
});

let allMoreTwo = document.querySelectorAll(".more-two");
let allMorePTow = document.querySelectorAll(".span-more-two");

allMoreTwo.forEach(function (ele) {
  ele.onclick = function () {
    document.getElementById("span-more-two").style.display = "block";
    document.getElementById("more-two").style.display = "none";
  }
});

let allMoreThree = document.querySelectorAll(".more-three");
let allMorePThree = document.querySelectorAll(".span-more-three");

allMoreThree.forEach(function (ele) {
  ele.onclick = function () {
    document.getElementById("span-more-three").style.display = "block";
    document.getElementById("more-three").style.display = "none";
  }
});


// Start Scollor Top
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",  () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`; 
});

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
/////

let img = document.getElementById("img");