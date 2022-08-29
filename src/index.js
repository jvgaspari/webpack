import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";
import warning from "./templates/warning.html";
import fraseTxt from "./files/frase.txt";
import texto from "./files/texto.json";
import './styles/warning.css';

const title = new Title();
const image = new Image();
const button = new Button();

title.create("Primeira página");
image.insertWebpackImage();
button.create();

// Babel Spread
const obj = {a: 1, b:2, c:4, d:4 };

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);

// Import de html
const body = document.querySelector('body');
body.innerHTML += warning;

// Import arquivo de texto
const frase = fraseTxt;
console.log(frase);

// Import arquivo json
const pessoa = texto;
console.log(pessoa);

// Import constantes globais
console.log('Versão: ', VERSION);
console.log('Porta: ', PORT);
