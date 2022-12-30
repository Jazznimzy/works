document.getElementById("count-el"). innerText = 0
let increase = document.getElementById('button')
let decrease = document.getElementById('decrease')
let number = 0;

increase.addEventListener('click', function(){


    number += 1
    let countElement = document.getElementById("count-el");

countElement.innerHTML = number
console.log('Element:', countElement)
}
)
decrease.addEventListener('click', function(){
 
        number -= 1
        let countElement = document.getElementById("count-el");

countElement.innerHTML = number
//console.log('Element:', countElement)
})











let gradeOne = 2, gradeTwo = 4

function muliplyTwoGrades(firstgrade, secondgrade ){
    return firstgrade * secondgrade
}

console.log(muliplyTwoGrades(gradeOne, gradeTwo))

































let series = ["moneyHeist", "theOffice", "theFlash", "suicideSquad", 'spiderman', 'ozark', 'travellers']
series.unshift("Mindhunter")
series.push('Archer')
series.push('Ozark')
series.splice(series.length / 2, 1)
let lastItemInArray = series[series.length-1]

console.log(series[2])

if (series[0] == 'theOffice' ){
    series[0] = 'baki'
}
else if (series[0] == 'Mindhunter'){
    series[0] = 'baki'
}

switch (series[0]){
    case 'baki':
        series[0] = 'Vikings'
        break
    case 'baki':
        series[0] = 'Ginny and Georgia'
        break    
}
let actorsInfo = [
    {
        actorName : 'Grant Gustin',
        actorAge : 32,
        actorGender : "male" ,
    },

    {
        actorName : 'will Smith' ,
        actorAge : 42 ,
        actorGender : 'male' , 
    },

    {
        actorName : 'Vanya Victor',
        actorAge : 26 ,
        actorGender : 'not specified',
    }
]
 let nameElement = document.querySelector(".container")
for (let i = 0; i < actorsInfo.length; i++) {
    let dataArray = [actorsInfo[i].actorAge, actorsInfo[i].actorGender];

        console.log('Actor name age:', dataArray)

        let names = document.createElement('div');
names.classList.add('actor-element');
names.innerHTML =  `${actorsInfo[i].actorAge}`
nameElement.appendChild(names)


}
let qualifiedActors = actorNames.filter((actors) => {
    return actors.age > 30
})
    let actorElement = document.querySelector('.container')
qualifiedActors.map((actors) =>{
    let divElement = document.createElement('div');
    divElement.innerHTML = `${actors.name }`;
    actorElement.appendChild(divElement)
 }) 
console.log({ qualifiedActors })


let boxes = document.getElementsByClassName("box");
let boxesQuery = document.querySelectorAll(".box");

let tags = document.getElementsByTagName("div");

let containerElement = document.querySelecr(".container");


let divElement = document.createElement("div");
divElement.classList.add("test-element");
containerElement.appendChild(divElement)

let element = document.querySelector(".test-element");
element.innerHTML = 'This is a test element'
console.log('Boxes:', boxesQuery)

console.log('actorsname', actorsInfo[0].actorName)








console.log(lastItemInArray)
console.log(series)



*/

