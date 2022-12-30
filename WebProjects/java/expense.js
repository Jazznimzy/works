let number = document.querySelectorAll('.num');
 let  interval = 5000;
 console.log(number)
    number.forEach(numbers  => {
        let startValue = 0 ;
        let endValue = parseInt(numbers.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            numbers.innerHTML = startValue;
            if (startValue == endValue){
                clearInterval(counter);
            }

        }, duration);
    }) 