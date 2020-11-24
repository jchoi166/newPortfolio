const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
let dotsNav = document.querySelector('.carousel__nav')
let track = document.querySelector('.carousel__track')
let carousel = document.querySelector('.carousel')

// find widths of slides
let slides = Array.from(track.children)
let slideWidth = slides[0].getBoundingClientRect().width

//arranges slides next to one another
let setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}
slides.forEach(setSlidePosition)

const resize = e =>{
    // let slides = Array.from(track.children)
    let slideWidth = slides[0].getBoundingClientRect().width

    let setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px'
    }
    slides.forEach(setSlidePosition)
}

//reorganizes track after transformation
const newTrackArray = e =>{
    track = document.querySelector('.carousel__track')
    slides = Array.from(track.children)
    slides.forEach(setSlidePosition)
}

//changes dot color 
const moveToSlide = (currentSlide, targetSlide) =>{
    currentSlide.classList.remove('current__slide')
    targetSlide.classList.add('current__slide')

    oldDot = dotsNav.querySelector('.current__slide')
    oldDot.classList.remove('current__slide')

    let hello = track.querySelector('.current__slide').id
    switch (hello){
        case 's1':
            currentDot = document.getElementById('d1')
            currentDot.classList.add('current__slide')
            break
        case 's2':
            currentDot = document.getElementById('d2')
            currentDot.classList.add('current__slide')
            break
        case 's3':
            currentDot = document.getElementById('d3')
            currentDot.classList.add('current__slide')
            break
    }
   
}

//rightArrow
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current__slide')
    const targetSlide = currentSlide.nextElementSibling

    track.style.transform = 'translateX(-' + slideWidth + 'px)'
    track.appendChild(track.firstElementChild)
    moveToSlide(currentSlide, targetSlide)
})

//leftArrow
prevButton.addEventListener('click', e => {
    
    track.insertBefore(track.lastElementChild,track.firstChild)
    const currentSlide = track.querySelector('.current__slide')
    const prevSlide = currentSlide.previousElementSibling
    moveToSlide(currentSlide, prevSlide)
    track.style.transition = 'none'
    newTrackArray()
    track.style.transform = 'translateX(-' + slideWidth + 'px)'
    setTimeout(e => {
        track.style.transition = '700ms ease-in-out'
        track.style.transform = 'translateX(0)'
    })
    
})

//handles transform so pictures render in time before switch
track.addEventListener('transitionend', e => {
    track.style.transition = 'none'
    newTrackArray()
    track.style.transform = 'translateX(0)'
    setTimeout(e => {
        track.style.transition = '700ms ease-in-out'
    })
})

//auto interval 
const autoForward = e => {
    currentSlide = track.querySelector('.current__slide')
    targetSlide = currentSlide.nextElementSibling

    track.style.transform = 'translateX(-' + slideWidth + 'px)'
    track.appendChild(track.firstElementChild)
    moveToSlide(currentSlide, targetSlide)
}


// window.addEventListener('load', e =>{
    
//     var autoScrolling = true

//     carousel.onmouseover = e => {
//         autoScrolling = false
//     }
//     carousel.onmouseout = e => {
//         autoScrolling = true
//     }

//     setInterval(e => {
//         if(autoScrolling){
//             autoForward()
//         }
//     }, 4000)
// })

window.addEventListener('resize', e => {
    location.reload()
})