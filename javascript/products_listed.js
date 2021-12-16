document.querySelector(".burgericon").addEventListener("click", addWidth);

/* -----------------------------Menuwidthetc--------------------------------- */
function addWidth() {
  document.querySelector("#slideout-menu").classList.toggle("additionalWidth");
  document
    .querySelector("#slideout-menu")
    .classList.toggle("additionalOpacity");

  document.querySelector(".logo-image").classList.toggle("noClickEvents");
  document.querySelector(".icons").classList.toggle("noClickEvents");
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
}

/* ---------------Media queries------------------ */

const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
  document
    .querySelector(".burgericon")
    .addEventListener("click", changeDisplay);
}

function changeDisplay() {
  document.querySelector(".logo-image").classList.toggle("changeOpacity");
  document.querySelector(".icons").classList.toggle("changeOpacity");
}

const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
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

  function LogoandIconOpac() {
    document
      .querySelector(".logo-image")
      .classList.toggle("additionalOpacityWelcome");
    document
      .querySelector(".icons")
      .classList.toggle("additionalOpacityWelcome");
  }
}
/* -------------------FETCHING DATA------------------------------ */
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const url = `https://naturalwinedata-1fc5.restdb.io/rest/ivaldeproducts?q={"Category":"${category}"}`;

console.log(url);
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
function handleData(jewellery) {
  /* console.log(jewellery);
  console.log("pieceofart"); */
  jewellery.forEach(singePiece);
}

function singePiece(item) {
  const template = document.querySelector("#datatemplate").content;
  console.log(item);
  const copy = template.cloneNode(true);
  copy
    .querySelector(".itemimg a")
    .setAttribute("href", "productpage.html?id=" + item._id);
  copy.querySelector(".itemname").textContent = item.Title;
  copy.querySelector(".itemprice").textContent = item.Price;
  copy.querySelector("img").src = item.primary_img;

  const parent = document.querySelector(".productgrid");

  parent.appendChild(copy);
}
