$(document).ready(function() {
    $('.prev').on('click', function(){
        var prevImg = $('img.active').prev('.slider-inner img');
        if(prevImg.length == 0) {                   // Fall kein vorheriges Bild existiert
            prevImg = $('.slider-inner img:last');  // das letzte Bild in der slider-inner Klasse auswählen
        } 
        $('img.active').removeClass('active');      // Element mit "active" Klasse suchen und diese Klasse entfernen
        prevImg.addClass('active');                 // und dem neuen aktuellen Element geben
        }); 
        $('.next').on('click', function() {
            var nextImg = $('img.active').next('.slider-inner img');
            if(nextImg.length == 0) {               //Falls kein nächstes Bild existiert
                nextImg = $('.slider-inner img:first'); // das erste Bild in der slider-inner Klasse auswählen
            } 
            $('img.active').removeClass('active'); 
            nextImg.addClass('active');
        });
});
                
