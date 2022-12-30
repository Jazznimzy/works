let modalBg = document.querySelector('.modal-bg')
let modal = document.querySelectorAll('.modal')
let navIcon = document.getElementById('nav-icon')
let modalExit = document.querySelector('.modal-exit')
let  popModalContainer = document.querySelector('.pop-modal-container')
let popUp = document.querySelector('.pop-up')
let zaneFooter = document.querySelector('.zane-footer')
navIcon.addEventListener('click', function (){
    console.log(this.clicked)
    
    modalBg.classList.add('modal-active')
    console.log(modalBg)
})
modalExit.addEventListener('click', function (){
    modalBg.classList.remove('modal-active')
}),

window.addEventListener('load', function(){
    setTimeout(
        function open(event){
            popModalContainer.style.display = 'block'
        },
        2000
    )

    
})
document.addEventListener('click', function (){
    popModalContainer.style.display = 'none'
})

window.onscroll = function () {
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    console.log(this.scrollY, maxScroll)
    if (this.scrollY <= maxScroll / 2){
        
    }
}