let inputElement = document.querySelector('.input-space')
inputElement.addEventListener('input', function() {
let emptyString = ''
emptyString = inputElement.value


function getVowels(emptyString){
    let VowelCount = 0
    const Vowels = ['a', 'e','i', 'o', 'u'];
    const strArry = emptyString.split('');
    
    strArry.forEach(element => {
        for (let i = 0; i < Vowels.length; i++) 
            {
            if(element === Vowels[i]){
                VowelCount ++
            }
        }
        console.log(VowelCount)
    });
return getVowels 
}

getVowels(emptyString)


})




