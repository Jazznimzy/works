let inputFields = document.querySelectorAll('.input-field'),
    forms = document.querySelectorAll('.form-container'),
 next = document.querySelectorAll('.next');
let currentForm = 0;
let password = document.querySelectorAll('.password');
let confirmPassword = document.querySelectorAll('.confirm-password')
let passwordValue = '', confirmPasswordValue = '';
let email = document.querySelectorAll(".email");
let emailValue;

let regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;


email.forEach(email => {
    email.addEventListener('input', function(){
        emailValue = this.value
        console.log(emailValue)
    } )
})

password.forEach(password => {
    password.addEventListener('input', function(){
        passwordValue = this.value
        console.log(passwordValue.length)
        console.log(passwordValue)
    })
})
confirmPassword.forEach(confirmPassword => {
    confirmPassword.addEventListener('input', function(){
        confirmPasswordValue = this.value
        console.log(confirmPasswordValue)
    })
})




function moveToNextPage(){
    forms.forEach(form =>{
        form.classList.remove("active")
        
    })
    currentForm += 1

        forms[currentForm].classList.add('active')
        
}


next.forEach(button => {
    button.addEventListener('click', function (event){
       
        console.log(button)
        let hasEmptyField = false;
        
        if (passwordValue != confirmPasswordValue){
            hasEmptyField = true
        };
        
        if (passwordValue.length >=  8 ){
            hasEmptyField = false
        }
        console.log( regExp.test(emailValue) )
        let testValue;

        if(emailValue) {
            testValue = emailValue
        } else {
            testValue = ''
        }

        hasEmptyField = !regExp.test(testValue)

//hasEmptyField = !regExp.test(emailValue ? emailValue : '')
        
       forms[currentForm].querySelectorAll(".input-field").forEach(field => {
                 if( field.classList.contains('shake')){
                        field.classList.remove('shake')
                    }; 
                    
                    if (field.value === '') {
                    hasEmptyField = true
                  
                    setTimeout(() => {
                            field.classList.add("shake") 
                    }, 100)
                   
                }
                
       })

       
        if (hasEmptyField == false){
            moveToNextPage()
        }

        


    } )
});












































let fieldObject = {
    name: '',
    email: '', 
    contact:  '',
}

inputFields.forEach(field => {
    field.addEventListener('input', function (event){

        fieldObject[field.name] = field.value;

      //  console.log(fieldObject[field.name])
    })
}
    )