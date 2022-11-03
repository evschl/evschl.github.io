let animSpeed = 1000;
let pause = 3000;
let interval;

function startSlideshow()
{
    interval = setInterval(function(){}, pause);
    $('.slides > li:first')
    .fadeOut(animSpeed)
    .next()
    .fadeIn(animSpeed)
    .end()
    .appendTo('.slides');
}
//LEFT OFF AT: Inside our function we will use jQuery to fade between slides at the speed of the animationSpeed variable: