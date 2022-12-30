$(document).ready(function(){
let body =$('.body')
    let inputFields = [
        {
            name: "firstName",
            type: 'name',
            label: 'First Name',
            placeholder: 'Enter your First Name',
            value: '',
            haserror: 'false',
            errorMessage: 'First Name is needed',
        },
        {   name: "lastname",
            type: 'name',
            label: 'Last Name',
            placeholder: 'Enter your Last Name',
            value: '',
            haserror: 'false',
            errorMessage: 'Last Name is needed',
        },
        {
            name: "email",
            type: 'email',
            label: 'Email',
            placeholder: 'Enter your Email Address',
            value: '',
            haserror: 'false',
            errorMessage: 'Invalid Email',
        },
        {
            type: 'password',
            name:"password",
            label: 'password',
            placeholder: 'Enter your Password',
            value: '',
            haserror: 'false',
            errorMessage: 'Create a Password',
        },
        {
            type: 'password',
            name:"confirmPasswordField",
            label: 'confirmPassword',
            placeholder: 'Confirm your Password',
            value: '',
            haserror: 'false',
            errorMessage: 'Create a Password',
        },
    ];
    let regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

    body.append(
        `<div class="container">
                    <div class="content-section">   
                        <div class="description">
                        <div class="description-header">
                        Learn to code by watching others
                        </div>
                        <div class="description-text">
                        See how experienced developers solve problem in real time.
                        Watching scripted tutorials is great, but understanding how developers think is invaluable
                        </div>
                    </div>
                    <div class="sign-up">
                            <div class="top-sign-up-button">   
                                <button>Try it free 7 days then $20/mo. Thereafter</button>
                            </div>
                            <div class="sign-up-form">   
                            
                            </div>
                    </div>
                    </div>
                    
            </div>
        `
    )
    let signUp = $('.sign-up-form')
    inputFields.forEach(field => {

        signUp.append(
                    `
                      <div class="data-section"> 
                          <div class="input" >
                            <input class="input-content" type="${field.type}" placeholder="${field.placeholder}">
                        </div>
                        <div class="error-text"> ${inputFields.errorMessage} </div>
                      </div>
                    `

        )
    })
    signUp.append(
        `<div class="bottom-sign-up-button">
            <button>Claim Your Free Trial</button>
        </div>
        <div class="footer">    
        BY clicking the button you are agreeing to our <p><a href="">Terms and condition</a></p>   
        </div>`
    )

    $(document).on('input', '.input-content', function () {


        let value = $(this).val()
        let index =  $('.input-content').index(this)
        console.log(index)



        inputFields[index].value = value
    })
    let submitButton = $('.bottom-sign-up-button')

    submitButton.on('click', function (event){
        event.preventDefault()
        let hasIssue = false

        /*let passwords = fields[3].value
    let confirmPassword = fields[4].value
    console.log(confirmPassword)
    console.log(passwords)
    if (passwords === confirmPassword){
        hasIssue = false
    }
    else {
        hasIssue = true
    }*/

        let emptyFields = inputFields.filter(field => field.value === '').length
        console.log({ emptyFields})

        let fields = $('.input-content');
            for (let i = 0; i < fields.length; i++){
                let fieldItem = fields.eq(i);
                let container = fieldItem.parent().parent()

                if(fieldItem.val() === ''){
                    let fieldObject = inputFields[i]
                    setErrorMessage(container, i,`${fieldObject.label} cannot be empty`)
                    hasIssue = true
                }
                else{
                    hasIssue = false
                    container.removeClass('error')

                }
                if (inputFields[i].name === "password"){
                    let inputedPassword = fieldItem.val();
                    let confirmPasswordField = inputFields.find(field => field.name === "confirmPasswordField");

                    if (confirmPasswordField && confirmPasswordField.value !== inputedPassword){
                        setErrorMessage(container, i, `looks like the passwords do not match`)
                    }
                    if (inputedPassword.length <8){
                        hasIssue = true
                        setErrorMessage(container, i, `Too short`)

                    }
                 }
                if (inputFields[i].name === "email" ){
                    let emailValue = fieldItem.val();
                    let testValue = regExp.test(emailValue)
                    console.log(testValue)

                    if ( !testValue && emailValue != ""){
                        hasIssue = true

                        setErrorMessage(container, i, `This is not a valid email`)

                    }
                }
                let result = {
                    name: "",
                    lastname:"",
                    email: "",
                    password: "",
                }

             //  console.log(fieldItem.val())
                inputFields.forEach(field => {
                    for (const key in result){
                        // console.log(inputFields[key])
                        result[key] = field.value
                        // console.log(inputFields[key].value)

                        //  result = array.assign({},inputFields)
                        // console.log(goat)
                    }
                })


               /* fieldItem.val().forEach(data => {
                    data = result
                })*/
                console.log(result)
            }
        function setErrorMessage(container, index, errorMessage){
            container.addClass("error");
            container.find(".error-text").text(errorMessage);
            fields[index].errorMessage = errorMessage


        }

    })








    /*function generateRandomNumber() {
        return Date.now() + Math.floor( Math.random() * 16)
    }

    console.log({ number: generateRandomNumber() })
*/
})

