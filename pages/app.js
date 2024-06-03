window.onload = (function () {
  const tabs = document.querySelectorAll('.tab')
  const tabContents = document.querySelectorAll('.content')

  function openTab(index) {
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active')
    })

    tabContents[index].classList.add('active')
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      openTab(index)
    })
  })

/* KONTENT 1 LOGO */
//  refactor| pisahkan file jangan jadikan IIFE jadikan WC / customElements
const parent = document.querySelector('.parentGrid');

// data gambar | fetch local aja
const urlImages = [
    '/assets/images/graphic_design/LF_Asset 9.svg',
    '/assets/images/graphic_design/3Warna_Asset 11.svg',
    '/assets/images/graphic_design/Warisan_Asset 12.svg',
    '/assets/images/graphic_design/Greedy_Asset 13.svg',
    '/assets/images/graphic_design/Hahahihi_Asset 14.svg',
    '/assets/images/graphic_design/volleyball_Asset 15.svg',
    '/assets/images/graphic_design/kedaiUpeh_Asset 18.svg',
    '/assets/images/graphic_design/haska_Asset 16.svg',
    '/assets/images/graphic_design/sesland_Asset 17.svg',
    '/assets/images/graphic_design/kopiminheral_Asset 19.svg',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/'
];

// for loop | forEach

// for(let i = 0; i<urlImages.length;i++) {
//     const child = document.createElement('div');
//     child.classList.add('itemGrid')

//     const image = document.createElement('img');
//     image.src = urlImages[i]
//     image.alt = 'gambar'+(i+1)

//     child.appendChild(image)
//     parent.appendChild(child)
// }

urlImages.forEach((image, index)=>{

    const child = document.createElement('div');
    child.classList.add('itemGrid')

    const img = document.createElement('img');
    img.src = image
    img.alt = 'gambar'+(index+1)

    child.appendChild(img)
    parent.appendChild(child)

})

/* KONTEN 2 UI UX */
const uiuxContent = document.querySelector('.UIUX');
const assetLandingPages = [
    "/assets/images/apps_design/landing page lifetime.png",
    "/assets/images/apps_design/landing page renkim.png",
    "https://res.cloudinary.com/dj9igs3tj/image/upload/v1707323858/moch_portofolio/UI_UX/portfolio__hl285k.png"
    
    

];

assetLandingPages.forEach(landingPage => {
    const imgUIUX = document.createElement('img');
    imgUIUX.src = landingPage

    const hrDivider = document.createElement('hr');

    uiuxContent.append(imgUIUX,hrDivider)
})

console.log(assetLandingPages)




/* KONTEN 3 Mural */
const muralContent = document.querySelector('.murals');;
const mural_Projects = [
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298497/moch_portofolio/murals/mural_mix_box98k.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298496/moch_portofolio/murals/mural_tk_alkahdi_vqn4gj.png'
];

mural_Projects.forEach(mural => {
    const muralItem = document.createElement('img');
    muralItem.src= mural

    muralContent.appendChild(muralItem)
})
/* KONTEN 4 Other */
const otherContent = document.querySelector('.other');
const lifetime_layouts = [
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299095/moch_portofolio/Other/layouts_/layout_1Asset_7_px3awx.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299063/moch_portofolio/Other/layouts_/layout_1Asset_3_bnx5v3.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299058/moch_portofolio/Other/layouts_/layout_Asset_2_msoste.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299060/moch_portofolio/Other/layouts_/layoutAsset_2_3x_a9xklx.png',
    '',
];

lifetime_layouts.forEach(layout =>{
    const lfItem = document.createElement('img');
    lfItem.src = layout
    otherContent.appendChild(lfItem)
})
/* KONTEN 5 XXX */


})();

