/* ---------------Slideoutmenu clickevent------------------ */

document.querySelector(".burgericon").addEventListener("click", addWidth);

/* ---------------Mediaqueries------------------ */

const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
  document
    .querySelector(".burgericon")
    .addEventListener("click", changeDisplay);
}

var bgVid = document.querySelector("#bgVid");

const mediaQuery1 = window.matchMedia("(min-width: 500px)");
if (mediaQuery1.matches) {
  bgVid.setAttribute("src", "assets/Ivalde_website_tablet.mp4");
}
const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  bgVid.setAttribute("src", "assets/Ivalde_website_desktop.mp4");

  document.querySelector(".asidecontainer").addEventListener("click", addWidth);
  document.querySelector(".secondhalf").addEventListener("click", addWidth);
  document
    .querySelector(".asidecontainer")
    .addEventListener("click", LogoandIconOpac);
  document
    .querySelector(".secondhalf")
    .addEventListener("click", LogoandIconOpac);
  document
    .querySelector(".burgericon")
    .addEventListener("click", LogoandIconOpac);
}
/* ---------------Fetching data------------------ */

const url =
  'https://naturalwinedata-1fc5.restdb.io/rest/ivaldeproducts?q={"frontpage_selection":true}';

const options = {
  headers: {
    "x-apikey": "61387a0c43cedb6d1f97ee32",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleData(data);
  })

  .catch((e) => {
    console.error("An error occured:", e.message);
  });
/* ---------------Functions------------------ */

function addWidth() {
  document.querySelector("#slideout-menu").classList.toggle("additionalWidth");
  document
    .querySelector("#slideout-menu")
    .classList.toggle("additionalOpacity");
  document
    .querySelector(".welcome")
    .classList.toggle("additionalOpacityWelcome");
  document
    .querySelector(".listinggrid")
    .classList.toggle("additionalOpacityWelcome");

  document.querySelector(".listinggrid").classList.toggle("noClickEvents");
  document.querySelector(".welcome").classList.toggle("noClickEvents");
  document.querySelector(".logo-image").classList.toggle("noClickEvents");
  document.querySelector(".icons").classList.toggle("noClickEvents");
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
}
function changeDisplay() {
  document.querySelector(".logo-image").classList.toggle("fullOpacity");
  document.querySelector(".icons").classList.toggle("fullOpacity");
}

function LogoandIconOpac() {
  document
    .querySelector(".logo-image")
    .classList.toggle("additionalOpacityWelcome");
  document.querySelector(".icons").classList.toggle("additionalOpacityWelcome");
}

function handleData(jewellery) {
  jewellery.forEach(singePiece);
}

function singePiece(item) {
  const template = document.querySelector("#datatemplate").content;

  const copy = template.cloneNode(true);
  copy
    .querySelector(".itemimg a")
    .setAttribute("href", "html/productpage.html?id=" + item._id);
  copy.querySelector(".itemname").textContent = item.Title;
  copy.querySelector(".itemprice").textContent = item.Price;
  copy.querySelector("img").src = item.primary_img;

  const parent = document.querySelector(".listinggrid");

  parent.appendChild(copy);
}
