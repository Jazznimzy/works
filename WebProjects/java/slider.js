let next1 = document.getElementById('next1');
let next2 = document.getElementById('next2');
let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
console.log(next1)
let image1 = document.getElementById('image1'),
    image2 = document.getElementById('image2'),
    image3 = document.getElementById('image3');
console.log(image1)

next1.addEventListener('click', function(){
    image1.style.left = "-300px"
    image2.style.left = "100px"
})
next2.addEventListener('click', function(){
    image2.style.left = "-300px"
    image3.style.left = "100px"
})
back1.addEventListener('click', function(){
    image2.style.left = "500px"
    image1.style.left = "100px"
})
back2.addEventListener('click', function(){
    image3.style.left = "500px"
    image2.style.left = "100px"
} )