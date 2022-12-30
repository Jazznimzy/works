$(document).ready(function () {
    console.log($('.question-box'))
    $('.question-con').on('click', function (){
        let index = $('.question-con').index(this)
        let questionBox = $('.question-box')
    for (let i = 0; i < questionBox.length; i++) {
        if (index !== i){
            questionBox.eq(i).removeClass('suggestions-expand')
        }
    }
        $(this).find('.caret-icon').toggleClass("rotate")
        $(this).find('.question-box').toggleClass('suggestions-expand')
        
        
    })
})