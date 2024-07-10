const themebutton = document.querySelector('#themebutton');
const html = document.querySelector("html");
var test = 0

themebutton.addEventListener('click', (e) => {
  if(html.classList.value == "") {
    console.log("test")
    html.classList.toggle("dark");
    test = 1;
    setStorage()
  } else {
    html.classList.remove("dark");
    test = 0;
    setStorage()
  }
})

const loadtheme = () => {
  if(test == 0) {
    html.classList.remove("dark");
  } else if(test == 1) {
    html.classList.toggle("dark");
  } else {
    html.classList.remove("dark");
  }
}

const setStorage = () => {
  window.localStorage.setItem("theme-value", JSON.stringify(test))
}

const getStore = () => {
  const d = JSON.parse(window.localStorage.getItem("theme-value"))
  console.log("Log " + d)
  test = d === null ? [] : d
  loadtheme();
}

window.addEventListener('load', () => {
  getStore();
}, false)