// animate with scroll
$(document).ready(function() {
    $("#title", "portfolio-title").addClass('animated slideInLeft');
    $("#title-subtitle").addClass('animated slideInRight');
    
    $('.card-portfolio').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
       });
    $('#contact').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeftBig',
        offset: 100
       });
    $('#skills-row-left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
       });
    $('#skills-row-right').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 100
       });
});

// button bounce on hover
$(".btn").hover(
    function() {
    $(this).addClass(" animated infinite tada")
}, function() {
    $(this).removeClass(" animated infinite tada")
});

// portfolio hover on images 
