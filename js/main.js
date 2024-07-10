const themebutton = document.querySelector('#themebutton');
const html = document.querySelector("html");
var themevalue = 0

themebutton.addEventListener('click', (e) => {
  if(html.classList.value == "") {
    console.log("themevalue")
    html.classList.toggle("dark");
    themevalue = 1;
    setStorage()
  } else {
    html.classList.remove("dark");
    themevalue = 0;
    setStorage()
  }
})

const loadtheme = () => {
  if(themevalue == 0) {
    html.classList.remove("dark");
  } else if(themevalue == 1) {
    html.classList.toggle("dark");
  } else {
    html.classList.remove("dark");
  }
}

const setStorage = () => {
  window.localStorage.setItem("theme-value", JSON.stringify(themevalue))
}

const getStore = () => {
  const d = JSON.parse(window.localStorage.getItem("theme-value"))
  console.log("Log " + d)
  themevalue = d === null ? [] : d
  loadtheme();
}

window.addEventListener('load', () => {
  getStore();
}, false)