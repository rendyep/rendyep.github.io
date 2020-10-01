$(window).load(function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function() {
    var vw;
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1, #b2, #b3, #b4, #b5').stop();
        $('#b11').animate({top:240, left: vw - 250}, 500);
        $('#b22').animate({top:240, left: vw - 150}, 500);
        $('#b33').animate({top:240, left: vw - 50}, 500);
        $('#b44').animate({top:240, left: vw + 50}, 500);
        $('#b55').animate({top:240, left: vw + 150}, 500);
    });

    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('body').addClass('peach').delay(5000).promise().done(function () {
        $('#play').fadeIn('slow');
    });

    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('.bannar').addClass('bannar-come');
            $('.balloon-border').animate({top: - 500}, 8000);
            $('#b1, #b3, #b5').addClass('balloons-rotate-behaviour-one');
            $('#b2, #b4').addClass('balloons-rotate-behaviour-two');
            loopOne();
            loopTwo();
            loopThree();
            loopFour();
            loopFive();
            loopSix();
            loopSeven();

            setTimeout(function () {
                $('.cake').fadeIn('slow').delay(3000).promise().done(function () {
                    $('.fuego').fadeIn('slow').delay(6000).promise().done(function () {
                        vw = $(window).width()/2;
                        $('#b1,#b2,#b3,#b4, #b5').stop();
                        $('#b1').attr('id','b11');
                        $('#b2').attr('id','b22')
                        $('#b3').attr('id','b33')
                        $('#b4').attr('id','b44')
                        $('#b5').attr('id','b55')
                        $('#b11').animate({top:240, left: vw - 250}, 500);
                        $('#b22').animate({top:240, left: vw - 150}, 500);
                        $('#b33').animate({top:240, left: vw - 50}, 500);
                        $('#b44').animate({top:240, left: vw + 50}, 500);
                        $('#b55').animate({top:240, left: vw + 150}, 500);
                        $('.balloons').css('opacity','0.9');
                        $('.balloons h2').fadeIn(3000).promise().done(function () {
                            $('.message').fadeIn('slow');
                            var i;
                            function msgLoop (i) {
                                $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
                                    i = i + 1;
                                    if (i == 48) {
                                        $("p:nth-child(" + i + ")").fadeIn('slow').delay(2000).promise().done(function () {
                                            $('#blow_candle').fadeIn('slow');
                                        });
                                    } else {
                                        $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
                                        msgLoop(i);
                                    }
                                });
                            }

                            msgLoop(0);
                        });
                    });
                });
            }, 5000);
        });
    });

    $('#blow_candle').click(function () {
        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('.fuego').fadeOut('fast');
            $('.message .last').fadeOut('slow');
            $('.firework').fireworks({ sound: true, opacity: 0.9, width: '100%', height: '100%' });
        });
    });

    function loopOne() {
        var randleft = $(window).width() * Math.random();
        var randtop = $(window).height() * Math.random();
        $('#b1').animate({left:randleft, bottom:randtop}, 10000, function () {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = $(window).width() * Math.random();
        var randtop = $(window).height() * Math.random();
        $('#b2').animate({left:randleft, bottom:randtop}, 10000, function () {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = $(window).width() * Math.random();
        var randtop = $(window).height() * Math.random();
        $('#b3').animate({left:randleft, bottom:randtop}, 10000, function () {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = $(window).width() * Math.random();
        var randtop = $(window).height() * Math.random();
        $('#b4').animate({left:randleft, bottom:randtop}, 10000, function () {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = $(window).width() * Math.random();
        var randtop = $(window).height() * Math.random();
        $('#b5').animate({left:randleft, bottom:randtop}, 10000, function () {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = $(window).width() * Math.random();
        var randtop = $(window).height() * Math.random();
        $('#b6').animate({left:randleft, bottom:randtop}, 10000, function () {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = $(window).width() * Math.random();
        var randtop = $(window).height() * Math.random();
        $('#b7').animate({left:randleft, bottom:randtop}, 10000, function () {
            loopSeven();
        });
    }
});

