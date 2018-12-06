import './scss/main.scss'

const Button = document.querySelector(".btn");
const inputPhone = document.getElementById("phone");
const divError = document.querySelector(".erro");
Button.addEventListener("click", function (event) {
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
    // const phone = phone.replace(/\D/g, "");
    window.open(`https://api.whatsapp.com/send?l=pt_br&phone=55${phone}`)
  } 
})

function inRange(x, min, max) {
  return ((x-min)*(x-max) <= 0);
}

// function mtel(v){
//   v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
//   v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
//   v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
//   return v;
// }

// function mascara(object,f){
//   v_obj=object
//   v_fun=f
//   setTimeout("execmascara()",1)
// }
// function execmascara(){
//   v_obj.value=v_fun(v_obj.value)
// }
// function mtel(v){
//   v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
//   v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
//   v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
//   return v;
// }
// function id( el ){
// return document.getElementById( el );
// }
// window.onload = function(){
// id('telefone').onkeyup = function(){
//   mascara( this, mtel );
// }
// }