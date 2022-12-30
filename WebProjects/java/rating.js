let circles = document.querySelectorAll(".circle");

circles.forEach((circle, index) => {
    circle.addEventListener('mouseover', function () {
        console.log({ index })

        for (let i = 0; i <= index; i++) {
           circles[i].classList.add('rated')
        }
    })

    circle.addEventListener('mouseleave', function () {
       for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove('rated')
       }
    })

})

