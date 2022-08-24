import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";

const title = new Title();
const image = new Image();
const button = new Button();

title.create("Primeira página");
image.insertWebpackImage();
button.create();