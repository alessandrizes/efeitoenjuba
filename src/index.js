import './scss/main.scss'

const button = document.querySelector(".btn");
const inputPhone = document.getElementById("phone");
const divError = document.querySelector(".erro");

const mobile = document.querySelector(".nav__menu_mobile");
const menuItens = document.querySelector(".nav__menu_itens");

mobile.addEventListener("click", function (event) {
  event.preventDefault();
  if (menuItens.style.top === "60px") {
    menuItens.style.top= "-60px"; 
  } else {
    menuItens.style.top= "60px"; 
  }
})

button.addEventListener("click", function (event) {
  event.preventDefault();
  const phone = inputPhone.value;
  if (!phone.trim()) {
    inputPhone.focus();
    return false;
  } else if (isNaN(phone)) {
    inputPhone.focus();
    divError.innerHTML = "Digite apenas números!";
    return false;
  } else if (!inRange(phone.length, 10, 11)) {
    inputPhone.focus();
    divError.innerHTML = "Digite um telefone válido!";
    return false;
  } else {
    window.open(`https://api.whatsapp.com/send?l=pt_br&phone=55${phone}`)
  } 
})

function inRange(x, min, max) {
  return ((x-min)*(x-max) <= 0);
}
