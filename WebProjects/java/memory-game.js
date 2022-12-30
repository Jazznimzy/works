let cardList = [
    {
        name: 'dog',
        image: '../images/dog.png',
        default: "../images/kenhub-badge.png",
        flipped: false

    },
    {
        name: 'dog',
        image: '../images/dog.png',
        default: "../images/kenhub-badge.png",
        flipped: false

    },
    {
        name: 'cat',
        image: '../images/cat.png',
        default: "../images/kenhub-badge.png",
        flipped: false

    },
    {
        name: 'bird',
        image: '../images/cat.png',
        default: "../images/kenhub-badge.png",
        flipped: false

    },
    {
        name: 'dog',
        image: '../images/bird.png',
        default: "../images/kenhub-badge.png",
        flipped: false

    },
    {
        name: 'dog',
        image: '../images/bird.png',
        default: "../images/kenhub-badge.png",
        flipped: false
    }
]
cardList.sort(() => 0.5 - Math.random());

let grid = document.querySelector('.gameGrid')
console.log(grid)
cardList.forEach(card => {
    grid.innerHTML += `<div class="default">
                        <img src="${card.default}" alt="">
                        </div>`
//gameGridImage = document.createElement('img')
//gameGridImage.setAttribute('src', `${card.default}`)

//grid.appendChild(gameGridImage)

});

let defaultItem = document.querySelectorAll('.default')
defaultItem.forEach((card, index) => {
    card.addEventListener('click',function() {
        let cardItem = cardList[index]
        console.log(cardItem);
        let cardImage = cardItem.flipped ? cardItem.default : cardItem.image;
        cardItem.flipped = !cardItem.flipped
        this.querySelector('img').setAttribute('src', cardImage)

        
        
    })
})

  


//function initiateBoard (){
    for (let i = 0; i < cardList.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', `${cardList[i].image}`)
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        //grid.appendChild(card)
        grid.appendChild = card

    }
    function flipCard(){

    }
//}
//initiateBoard()


function generateRandomNumber() {
        return Date.now() * Math.floor( Math.random() * 4)
}