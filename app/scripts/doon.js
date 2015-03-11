
/* jshint white:false */

(function() {
    'use strict';


    if (! Modernizr.touch) {
        $.stellar();
    }

    $('a').smoothScroll({
        offset: -70
    });


    $('#contactform').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/info@tminederland.nl',
            method: 'POST',
            data: {
                'naam': $('#naam').val(),
                'email': $('#email').val(),
                'phone': $('#phone').val(),
                '_next': $('#_next').val(),
                '_subject': $('#_subject').val(),
                'submit': $('#submit').val()
            },
            dataType: 'json'
        });

        $('#contactform_ok').fadeIn();

    });




}).call(this);