let tag = document.querySelector('.tag')
let bottom = document.querySelector('.bottom')
let options = document.querySelectorAll('.options li')
let change = document.querySelector('.tag')
let inputField = document.querySelector('.search')
let homeUtilities =[]
let optionsContainer = document.querySelector('ul')

function toggleDropdown(){
    let bottomOption = document.querySelector('.crazy').classList.contains('bottom')
    console.log(bottomOption)
    let call = document.querySelector('.crazy')
    if (bottomOption == true){
        
        call.classList.add('top')
        call.classList.remove('bottom')
    }
    else if (bottomOption == false){
        call.classList.add('bottom')
        call.classList.remove('top')
    }
}


tag.addEventListener('click', function (event) {
    
    toggleDropdown()
  
    
})



inputField.addEventListener("input", function () {
    let inputValue = inputField.value
    
    console.log(inputValue)

    let inputResult = homeUtilities.filter(utility => utility.toLowerCase().includes(inputValue.toLowerCase()))
    console.log(inputResult);



    optionsContainer.innerHTML = "";
    inputResult.forEach(result =>  {
        let optionElement = document.createElement("li");
        optionElement.innerHTML = result;
        optionsContainer.appendChild(optionElement)

        
            optionElement.addEventListener('click', function() {

            change.innerHTML =   `${optionElement.innerHTML}`
            })





    })
    


    
})

options.forEach(list => {
    homeUtilities.push(list.innerHTML)
    console.log(homeUtilities)

    function handleClick(event){
        console.log('clicked')
      let answer = list.innerHTML
        console.log(answer)
        change.innerHTML = `${answer}`
        .search.value = answer
    
        toggleDropdown()
    
        
    
    }
    list.addEventListener('click', handleClick)
})































