let animSpeed = 1000;
let pause = 3000;
let interval;

function startSlideshow()
{
    interval = setInterval(function(){
        $('.slides > li:first')
        .fadeOut(animSpeed)
        .next()
        .fadeIn(animSpeed)
        .end()
        .appendTo('.slides');
    }, pause);
}
//LEFT OFF AT: Inside our function we will use jQuery to fade between slides at the speed of the animationSpeed variable: