
(function () {
  const tabs = document.querySelectorAll('.tab')
  const tabContents = document.querySelectorAll('.content')
  const parentGrid = document.querySelector('.parentGrid')

  const uiuxContainer = document.querySelector('.UIUX')
  const muralsContainer = document.querySelector('.murals')
  const otherContainer = document.querySelector('.other')

  const uiuxUrls = [
    '/assets/images/apps_design/landing page lifetime.png',
    '/assets/images/apps_design/landing page renkim.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707323858/moch_portofolio/UI_UX/portfolio__hl285k.png',
  ]

  const muralUrls = [
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298497/moch_portofolio/murals/mural_mix_box98k.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707298496/moch_portofolio/murals/mural_tk_alkahdi_vqn4gj.png',
  ]

  const otherUrls = [
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299095/moch_portofolio/Other/layouts_/layout_1Asset_7_px3awx.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299063/moch_portofolio/Other/layouts_/layout_1Asset_3_bnx5v3.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299058/moch_portofolio/Other/layouts_/layout_Asset_2_msoste.png',
    'https://res.cloudinary.com/dj9igs3tj/image/upload/v1707299060/moch_portofolio/Other/layouts_/layoutAsset_2_3x_a9xklx.png',
  ]

  const logoUrls = [
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
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
    '/assets/images/graphic_design/',
  ]

  /* fungsi navlink konten */
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

/* utilitas untuk menampilkan items */  
  function addImagesToContainer(container, urls) {
    urls.forEach((url) => {
      const img = document.createElement('img')
      img.src = url
      container.appendChild(img)
    })
  }

  function createItemGridAndAddLogo(container) {
    logoUrls.forEach((logoUrl) => {
      const itemGrid = document.createElement('div')
      itemGrid.classList.add('itemGrid')
      container.appendChild(itemGrid)

      const img = document.createElement('img')
      img.src = logoUrl
      img.alt = 'logo'
      itemGrid.appendChild(img)
    })
  }

  addImagesToContainer(uiuxContainer, uiuxUrls)
  addImagesToContainer(muralsContainer, muralUrls)
  addImagesToContainer(otherContainer, otherUrls)

  createItemGridAndAddLogo(parentGrid)
})()
