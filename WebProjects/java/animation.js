

let checker = document.getElementById('checkboxx')
 checker.addEventListener('change', function (event) {
document.body.removeAttribute('class')
let gate = checker.checked


if (gate == true){
    document.body.classList.add('dark')
}
else if (gate == false){
    document.body.classList.add('goat')
}
 } )
        





/*
else (checker.checked = false){
    document.body.classList.add('light')
}*/




