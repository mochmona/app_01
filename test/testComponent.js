// import {urlImages} from '../data/logo_project.js'


customElements.define('test-component', class TestComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // ? coba refactor code ini
    const css = './testComponent.module.css'
    
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${css}">

    <div class="container">

    <h1 class="heading">test shadow root link</span></h1>

    <div class="gallery">
        <!-- konten dinamis -->

    </div>

</div>
    `;

const parentElement = this.shadowRoot.querySelector('.gallery');
const urlImages = [
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298181/moch_portofolio/logo/volleyball_Asset_15_ktmiyg.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298180/moch_portofolio/logo/sesland_Asset_17_r1u1gg.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298180/moch_portofolio/logo/LF_Asset_9_ohmr3h.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298179/moch_portofolio/logo/haska_Asset_16_wcmn71.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298179/moch_portofolio/logo/Hahahihi_Asset_14_bk1uum.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298179/moch_portofolio/logo/kopiminheral_Asset_19_gjktyw.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298179/moch_portofolio/logo/kedaiUpeh_Asset_18_btbpiv.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298178/moch_portofolio/logo/Greedy_Asset_13_jidqjr.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298177/moch_portofolio/logo/3Warna_Asset_11_l669fg.svg',
  'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298094/moch_portofolio/logo/Warisan_Asset_12_aotfgn.svg',

];


function createElementDom(url) {
    const wrapperImg = document.createElement('div');
    wrapperImg.classList.add("gallery-item");
    const img = document.createElement('img');
    img.classList.add("gallery-image")
    img.src = url;

    wrapperImg.appendChild(img)
    parentElement.appendChild(wrapperImg)

}



urlImages.forEach(createElementDom)



console.log(parentElement)
  }
});


// TODO make it solid and more dry , separate file into each utility