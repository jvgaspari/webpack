import Webpack from '../img/webpack-image.png';

class Image {

    insertWebpackImage(){

        const img = document.createElement('img');

        img.src = Webpack;

        img.width = 200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;