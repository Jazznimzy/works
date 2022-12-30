let emailField = document.querySelectorAll('.goat'),
    button = document.querySelector('button'),
    error = document.querySelector('.error');


emailField.forEach(field =>{
    field.addEventListener("input", function () {
         field.value
        console.log(field.value)
    })
    
    button.addEventListener('click', function (){
        if (field.value == ''){
            error.style.display = 'block'
        }
        else if (field.value != ''){
            error.style.display = 'none'
        }
    })
        

})

