import {urlImages} from '../data/logo_project.js'

const parentElement = document.querySelector('.gallery');;


function createElementDom(url) {
    const wrapperImg = document.createElement('div');
    wrapperImg.classList.add("gallery-item");
    const img = document.createElement('img');
    img.classList.add("gallery-image")
    img.src = url;

    wrapperImg.appendChild(img)
    parentElement.appendChild(wrapperImg)

}

// urlImages.forEach(url => {
//     createElementDom(url);
// })

urlImages.forEach(createElementDom)



console.log(parentElement)