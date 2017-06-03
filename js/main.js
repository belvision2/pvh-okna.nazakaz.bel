jQuery(function ($) {

    // ===================================================== Fix fixed bg's jump

    /MSIE [6-8]|Mac/i.test(navigator.userAgent) || $("header, article, footer").each(function () {
        if ("fixed" == $(this).css("backgroundAttachment")) {
            var i = $(this), a = /WebKit/i.test(navigator.userAgent) ? 9 : 8;
            i.addClass("froid-fixed-bg").data({
                bgX: i.css("backgroundPosition").slice(0, i.css("backgroundPosition").indexOf(" ")),
                bgY: i.css("backgroundPosition").slice(i.css("backgroundPosition").indexOf(" ")),
                margin: a
            })
        }
    }), $(window).bind("SIModals.modalsOpen", function () {
        $(".froid-fixed-bg").each(function () {
            var i = $(this);
            i.css("backgroundPosition", "calc(" + i.data("bgX") + " - " + i.data("margin") + "px) " + i.data("bgY"))
        })
    }), $(window).bind("SIModals.modalsClose", function () {
        $(".froid-fixed-bg").each(function () {
            var i = $(this);
            i.css("backgroundPosition", i.data("bgX") + " " + i.data("bgY"))
        })
    });


    // ===================================================== Mobile full-width && disable animation

    if (is_mobile()) {

        // Fix mobile fixed bg's
        $("header, article, footer").each(function () {
            if ("fixed" == $(this).css("backgroundAttachment")) $(this).css('backgroundAttachment', 'scroll');
        });

        // Mobile stretch
        $('html, body').css('min-width', '1280px').addClass('mobile');
        $('html').css('width', window.innerWidth + 'px');

        // Remove animation
        $('.cre-animate').css({
            'transform': 'none',
            '-webkit-transform': 'none',
            '-moz-transform': 'none',
            '-ms-transform': 'none',
            '-o-transform': 'none',
            'transition': 'none',
            '-webkit-transition': 'none',
            'opacity': 1
        }).removeClass('.cre-animate');

        $('.section-heading, .section-advantages, .section-guarantee, .section-steps').addClass('mobile');
    }

    if (is_OSX()) {
        $('html, body').addClass('osx');
    }

    // ===================================================== Init all plugins and scripts
    $.fn.SIInit = function () {

        // ===================================================== Modal photos
        $('a[data-rel]').each(function () {
            $(this).attr('rel', $(this).data('rel'));
        });
        $('a[rel^=fancybox]').not('.cloned a').fancybox({
            helpers: {
                thumbs: true
            }
        });

        // ===================================================== Forms
        $('.send-form').SIForms({
            'validateFields': {
                'client_name': 'Укажите Ваше имя',
                'client_phone': 'Укажите Ваш телефон',
             
            },
            'sendSuccess': function (res) {
                document.location.href="http://oknoff.by/index_otpr.html";
                //yaCounter.reachGoal('target' + res.id);
                //ga('send', 'event', res.gcode, res.gcode);
            }
        });

        $('.send-file-form').SIForms({
            'validateFields': {
                'client_phone': 'Укажите Ваш телефон'
            },
            'sendSuccess': function (res) {
                //yaCounter.reachGoal('target' + res.id);
                //ga('send', 'event', res.gcode, res.gcode);
            }
        });
    };

    $.fn.SIInit();


    // ===================================================== Styler
    $('input[type=file]').styler();
    $('.jq-file__name').html('Прикрепить проект');


    // ===================================================== All sound load
    $.ionSound({
        sounds: ["bip-1", "bip-2", "wuf-1", "wuf-2", "wuf-3", "wuf-4"],
        path: template_url + "/sounds/",
        volume: 0.3
    });


    // ===================================================== Sounds
    $(document).on('mouseenter', '.btn, .si-close, .phone-link, .si-jump, .owl-prev, .owl-next', function () {
        $.ionSound.play('bip-2');
    });
    SIModals.beforeOpen = function () {
        $.ionSound.play('wuf-4');
    };
    SIModals.beforeClose = function () {
        $.ionSound.play('wuf-3');
    };


    // ===================================================== Jump links
    $('.si-jump').SIJump();


    // ===================================================== Page messages
    SIPageMessages.init();


    // ===================================================== owl carousel
    $('.about-slider').owlCarousel({
        items: 4, nav: true, dots: false, loop: true,
        onChange : function(){
            $.ionSound.play('wuf-1');
        }
    });

    $('.screen-slider').owlCarousel({items: 1, nav: true, dots: false, loop: true,
        onChange : function(){
            $.ionSound.play('wuf-1');
        }
    });

    //===================================================== Modals
    SIModals.init();

    //Init modals
    SIModals.attachModal('.open-phone-modal', '.phone-modal', {'.send-extra': 'extra'});
    SIModals.attachModal('.open-master-modal', '.master-modal', {'.send-extra': 'extra'});

    //Modal controls
    SIModals.attachClose('.si-close');


    //===================================================== smooth scrolling
    SmoothScroll({stepSize: 100});

});

