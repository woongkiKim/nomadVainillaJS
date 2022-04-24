const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']

// 랜덤하게 이미지 뽑기
const selectedImg = images[Math.floor(Math.random() * images.length)]

const bgImg = document.createElement('img')

bgImg.src = `img/${selectedImg}`

document.body.appendChild(bgImg)
