const topNav = nav.offsetTop
const moreButton = document.querySelector('.moreButton')
moreButton.addEventListener('click', function(){
    document.querySelector('.moreText').classList.toggle('show')
    document.querySelector('.moreButton').classList.toggle('show')
})

