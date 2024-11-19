/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // Definir las listas
  console.log("prueba de nombres aleatorios");
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for (let i of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let domain = i + a + n + '.com'; //todo valor + .com
       console.log(domain); 
      }
    }
  }

};
