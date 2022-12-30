xzczlet inputFields = document.querySelectorAll('.input-field')

let fieldObject = {
    name: '',
    email: '', 
    contact:  '',
}

inputFields.forEach(field => {
    field.addEventListener('input', function (event){

        fieldObject[field.name] = field.value;

        console.log(fieldObject[field.name])
    })
}
    )

let submitButton = document.querySelector('button')

submitButton.addEventListener('click', function (event) {
    event.preventDefault();


    let hasEmptyField = false;

    for (const key in fieldObject){
        console.log(fieldObject[key])

        if (fieldObject[key] == ''){
           hasEmptyField = true
        }
     
    }

    console.log({ hasEmptyField })

    if (hasEmptyField == false ) {

        
    
        document.querySelector('.show').style.visibility = 'visible';



        for (const key in fieldObject){
            console.log(fieldObject[`${key}`])
            
            let displayElement = document.querySelector('.show')
            let showElement = document.createElement('div')
            showElement.innerHTML = fieldObject[`${key}`]
            showElement.classList.add('show-div')
            displayElement.appendChild(showElement)
        }
    }



       
    
    })








  