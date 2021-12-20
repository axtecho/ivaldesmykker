document.querySelector(".burgericon").addEventListener("click", addWidth);

/* -----------------------------Menuwidthetc--------------------------------- */
function addWidth() {
  document.querySelector("#slideout-menu").classList.toggle("additionalWidth");
  document
    .querySelector("#slideout-menu")
    .classList.toggle("additionalOpacity");

  document
    .querySelector(".logo-image")
    .classList.toggle("additionalOpacityWelcome");
  document.querySelector(".icons").classList.toggle("additionalOpacityWelcome");
  document.querySelector("main").classList.toggle("additionalOpacityWelcome");
  document.querySelector(".addtocart").classList.toggle("noClickEvents");
  document.querySelector(".size").classList.toggle("noClickEvents");

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

var bgImg = document.querySelector("#bg");

const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  document.querySelector(".asidecontainer").addEventListener("click", addWidth);
  document.querySelector(".secondhalf").addEventListener("click", addWidth);
}

/* -------------------Fetching date------------------------------ */
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://naturalwinedata-1fc5.restdb.io/rest/ivaldeproducts/" + id;

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
function handleData(item) {
  document.title = item.Title + " | IVALDE";

  document.querySelector(".img1").src = item.primary_img;
  document.querySelector(".img2").src = item.img_2;
  document.querySelector(".img3").src = item.img_3;
  document.querySelector(".img4").src = item.img_4;
  document.querySelector(".name").textContent = item.Title;
  document.querySelector(".desc").textContent = item.Description;
  document.querySelector(".price").textContent = item.Price;
  document.querySelector(".breadcrumbCategory").textContent = item.Category;
document
  .querySelector(".breadcrumbCategoryA")
  .setAttribute("href", "products_listed.html?category=" + item.Category);
document.querySelector(".currentpage").textContent = item.Title;
}
