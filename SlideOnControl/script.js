function debounce(func, wait = 20, immediate = true){
    var timeout;

    return function(){
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}

const sliderImg = document.querySelectorAll('.slide-in');

function checkSlide(e){
    sliderImg.forEach(slideImg =>{
        //half way through the img
        const slideInAt = (window.scrollY + window.innerHeight) - slideImg.height / 2;
        //bottom of the img
        const imageBottom = slideImg.offsetTop + slideImg.height;
        const ishalfShown = slideInAt > slideImg.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(ishalfShown && isNotScrolledPast){
            slideImg.classList.add('active');
        }else{
            slideImg.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));