$(function () {
	


    /**
     * Модуль смены ламинации под ручкой
     * @type {*|jQuery|HTMLElement}
     */
    var $mc2Container = $('.module-color-2');
    var $mc2Images = $('#mc2-images');
    loadImages(2, $mc2Images, $mc2Container, 2, 9, 'jpg');

    $mc2Container.on('click', '#mc2-colors-list a', function (e) {
        e.preventDefault();
        var $li = $(this).parent();
        if ($li.hasClass('active')) {
            return false;
        }
        var $active = $mc2Images.find('.img.active');

        $('#mc2-colors-list').find('.active').removeClass('active');
        $li.addClass('active');
        $active.fadeOut(300).removeClass('active');
        $mc2Images.find('.img:eq(' + $li.index() + ')').fadeIn(300).addClass('active');
    });

    /**
     * Модуль смены ручки
     * @type {*|jQuery|HTMLElement}
     */
    var $mc3Container = $('.module-color-3');
    var $mc3Images = $('#mc3-images');
    loadImages(2, $mc3Images, $mc3Container, 3, 8, 'png');

    $mc3Container.on('click', '#mc3-colors-list a', function (e) {
        e.preventDefault();
        var $li = $(this).parent();
        if ($li.hasClass('active')) {
            return false;
        }
        var $active = $mc3Images.find('.img.active');

        $('#mc3-colors-list').find('.active').removeClass('active');
        $li.addClass('active');
        $active.removeClass('active').fadeOut(300);
        $mc3Images.find('.img:eq(' + $li.index() + ')').addClass('active').fadeIn(300);
    });

    /**
     * roto switcher
     */
    var $rotoImg = $('#roto-img');
    $(document).on('click', '.selecter-go', function () {
        var leftLine = 47;
        var leftChecker = 79;
        $rotoImg.find('.img').stop();
        if ($(this).hasClass('left')) {
            leftLine = 84;
            leftChecker = 116;
            $(this).removeClass('left');

            $rotoImg.find('.a').fadeIn(600);
            $rotoImg.find('.b').fadeOut(600);
        } else {
            $(this).addClass('left');

            $rotoImg.find('.b').fadeIn(600);
            $rotoImg.find('.a').fadeOut(600);
        }

        $('.selecter-line').stop().animate({
            left: leftLine
        }, 300);
        $('.selecter-checker').stop().animate({
            left: leftChecker
        }, 300);
        return false;
    });


    $('.balk-select').on('click', '.button.off', function () {
        var $btn1 = $('.balk-select .on');
        var $btn2 = $('.balk-select .off');
        $btn1.addClass('off').removeClass('on');
        $btn2.addClass('on').removeClass('off');
        var $imgCont = $('.balk .main-img');
        if ($btn2.parent().hasClass('a')) {
            $imgCont.find('.a').fadeIn(300);
$(".bal-2").fadeIn(300);
            $imgCont.find('.b').fadeOut(300);
$(".bal-1").fadeOut(300);
        } else {
            $imgCont.find('.b').fadeIn(300);
$(".bal-1").fadeIn(300);
            $imgCont.find('.a').fadeOut(300);
$(".bal-2").fadeOut(300);
        }
    });

});

/**
 * Загружаем и ждем загрузки картинок для модулей
 *
 * @param ind
 * @param $obj
 * @param $container
 * @param folder
 * @param all
 * @param ext
 */
function loadImages(ind, $obj, $container, folder, all, ext) {
    if (ind <= all) {
        $obj.append('<img class="img item-img" src="images/module-color/' + folder + '/' + ind + '-img.' + ext + '">');
        var $item = $obj.find('.item-img:last');
        $item.load(function () {
            loadImages(++ind, $obj, $container, folder, all, ext);
        });
    } else {
        showImages($container);
    }
}

/**
 * Показываем картинки для модулей
 * @param $obj
 */
function showImages($obj) {
    $obj.find('.preload').fadeOut(100);
    $obj.find('.colors-list').fadeIn(300);
}