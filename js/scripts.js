$(document).ready(function () {

    /*--- change text banner ---*/

    $('.text-switch span').click(function () {
        var time = 500;
        var indexClicked = $(this).index();

        $('.text-switch span.active-text-switch').removeClass('active-text-switch');
        $(this).addClass('active-text-switch');

        $('.text-banner-wrap p.visible').fadeOut(time, function () {
            $(this).removeClass('visible');

            $('.text-banner-wrap p').eq(indexClicked).fadeIn(time, function () {
                $(this).addClass('visible');
            });
        });
    });


    /*--- auto change text banner ---*/

    function textSwitch() {

        var time = 500;
        var currentSwitch = $('.text-switch span.active-text-switch');
        var countSwitch = $('.text-switch span').length;

        if (currentSwitch.index() != (countSwitch - 1)) {
            $(currentSwitch).removeClass('active-text-switch');
            $(currentSwitch).next().addClass('active-text-switch');
        }
        else {
            $(currentSwitch).removeClass('active-text-switch');
            $('.text-switch span').eq(0).addClass('active-text-switch');
        }


        var currentText = $('.text-banner-wrap p.visible');
        var countText = $('.text-banner-wrap p').length;

        if (currentText.index() != (countText - 1)) {
            $(currentText).fadeOut(time, function () {
                $(currentText).removeClass('visible');
                $(currentText).next().fadeIn(time, function () {
                    $(this).addClass('visible');
                });
            });
        }
        else {
            $(currentText).fadeOut(time, function () {
                $(currentText).removeClass('visible');
                $('.text-banner-wrap p').eq(0).fadeIn(time, function () {
                    $(this).addClass('visible');
                });
            });
        }

    }

    setInterval(textSwitch, 5000);


    /*--- change img banner ---*/


    $('.img-switch span').click(function () {
        var time = 500;
        var indexClicked = $(this).index();

        $('.img-switch span.active-img-switch').removeClass('active-img-switch');
        $(this).addClass('active-img-switch');

        $('.change-img div.visible').fadeOut(time, function () {
            $(this).removeClass('visible');

            $('.change-img div').eq(indexClicked).fadeIn(time, function () {
                $(this).addClass('visible');
            });
        });
    });


    /*--- auto change img banner ---*/
    function imgSwitch() {

        var time = 500;

        var currentSwitch = $('.img-switch span.active-img-switch');
        var countSwitch = $('.img-switch span').length;

        if (currentSwitch.index() != (countSwitch - 1)) {
            $(currentSwitch).removeClass('active-img-switch');
            $(currentSwitch).next().addClass('active-img-switch');
        }
        else {
            $(currentSwitch).removeClass('active-img-switch');
            $('.img-switch span').eq(0).addClass('active-img-switch');
        }


        var currentImg = $('.change-img div.visible');
        var countImg = $('.change-img div').length;
        var allImg = $('.change-img div');

        if (currentImg.index() != (countImg - 1)) {
            $(currentImg).fadeOut(time, function () {
                $(allImg).removeClass('visible');
                $(currentImg).next().fadeIn(time, function () {
                    $(this).addClass('visible');
                });
            });
        }
        else {
            $(currentImg).fadeOut(time, function () {
                $(allImg).removeClass('visible');
                $('.change-img div').eq(0).fadeIn(time, function () {
                    $(this).addClass('visible');
                });
            });
        }

    }

    setInterval(imgSwitch, 5000);

    /*--- menu ---*/

    $('.menu-button').click(function () {

        var time = 300;

        $('.hidden-menu').fadeIn(time);
        $('.close-menu-button').click(function () {
            $('.hidden-menu').fadeOut(time);
        });

        $(document).mouseup(function (e) {
            var div = $(".hidden-menu");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.fadeOut(time);
            }
        });

    });

    /*--- sub-menu ---*/

    var hideBox = function (element) {

        $(element).each(function () {

            var temp = false;
            var time = 300;
            var hideBox = this;

            if ($(hideBox).find('ul').css('display') == 'block') {
                temp = true;
            }

            $(hideBox).click(function () {
                if (temp) {
                    $(hideBox).find('ul').slideUp(time);
                    $(hideBox).children('span').css({
                        'background': 'url("images/sub-menu-open.png") no-repeat center',
                        'width': '14px'
                    });
                    temp = false;
                }
                else {
                    $(hideBox).find('ul').slideDown(time);
                    $(hideBox).children('span').css({
                        'background': 'url("images/sub-menu-close.png") no-repeat center',
                        'width': '17px'
                    });
                    temp = true;
                }
            });
        });


    };

    hideBox('.main-menu > li');

    /*--- basket ---*/

    /*--- count products ---*/

    var countProduct = function (element) {

        $(element).each(function () {
            var currentProduct = $(this);
            $(currentProduct).find('.minus').click(function () {
                var inputCount = $(currentProduct).children('input');
                var currentCount = $(inputCount).attr('value');
                var minus = currentCount - 1;
                $(inputCount).attr({'value': minus});

            });

            $(currentProduct).find('.plus').click(function () {
                var inputCount = $(currentProduct).children('input');
                var currentCount = $(inputCount).attr('value');
                var plus = parseInt(currentCount) + parseInt(1);
                $(inputCount).attr({'value': plus});

            });

        });

    };

    countProduct('.product-count');


    /*--- show-hide basket ---*/

    $('.basket-button').click(function () {

        var time = 300;

        $('.hidden-basket').fadeIn(time);

        $('.continue').click(function (a) {
            a.preventDefault();
            $('.hidden-basket').fadeOut(time);
        });

        $(document).mouseup(function (e) {
            var div = $(".hidden-basket");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.fadeOut(time);
            }
        });

    });


   /*--- change banner img ---*/

   /* $(window).resize(function(){

        $('.change-img img').each(function () {
            var currentImg = $('.change-img img').attr('src');
            var cutSrc = currentImg.split('.png');
            var newImg = cutSrc[0] + ('-small.png');
            if ($(window).width() <= '995'){
                $(this).attr({'src':newImg});
            }
            else {
                $(this).attr({'src':currentImg});
            }
        });

    });*/

});