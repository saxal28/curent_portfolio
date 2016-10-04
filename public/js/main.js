// animate with scroll
$(document).ready(function() {
    $('#bio, #skills, .card').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
       });
    $('#contact').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 100
       });
});