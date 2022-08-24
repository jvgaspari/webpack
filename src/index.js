import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";

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