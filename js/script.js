$(function() {
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    // scroll animation
    $(window).on('scroll', function() {
        var ht = $(window).scrollTop();
        if(ht >= 100) {
            $('header').addClass('fill');
            $('#scroll_top').addClass('show');
        } else {
            $('header').removeClass('fill');
            $('#scroll_top').removeClass('show');
        }
    });

    // scroll_top animation (move to top)
    $('#scroll_top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // .language animation
    $('.language li a').on('click', function() {
        $('.language li a').removeClass('active');
        $(this).addClass('active');
    });

    // header .search animation
    $('header .search').on('click', function() {
        $('#search').addClass('show');
    });
    $('#search .close_btn').on('click', function() {
        $('#search').removeClass('show');
    });

    // header .menu animation
    $('header .menu').on('click', function() {
        $('#mobile_nav').addClass('show');
        $('#bg').addClass('show');
    });
    $('#mobile_nav .btn').on('click', function() {
        $('#mobile_nav').removeClass('show');
        $('#bg').removeClass('show');
    });

    $('#bg').mouseup(function(e) {
        var mobile_nav = $('#mobile_nav');

        if(mobile_nav.has(e.target).length === 0){
            mobile_nav.removeClass('show');
            $('#bg').removeClass('show');
        }
    });

    // #mobile_nav animation
    var wd = $(window).width();
    if(wd < 1380) {
        $('.category .dep1').hide();
        $('.category > li > p').on('click', function() {
            if($(this).hasClass('slide') == true) {
                $(this).removeClass('slide').next('.dep1').slideUp();
            } else {
                $('.category > li > p').removeClass('slide').next('.dep1').slideUp();
                $(this).addClass('slide').next('.dep1').slideDown();
            }
        });
    }

    // .nav_footer click animation
    $('.nav_bottom a').on('click', function() {
        $('.nav_bottom a').removeClass('click');
        $(this).addClass('click');
    });

    // #sub_nav click animation
    var ddm = $('#sub_nav .dep ul'),
        ddm_list = $('#sub_nav .gnb .dep ul li a');

    ddm_list.on('click', function() {
        ddm_list.removeClass('active');
        $(this).addClass('active');
    });

    ddm.hide();
    $('#sub_nav .btn').on('click', function() {
        var style = $(this).next('ul').hasClass('show');

        if(style == false) {
            ddm.slideUp().removeClass('show');
            $(this).next('ul').slideDown().addClass('show');
            $('#sub_nav .btn').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).next('ul').slideUp().removeClass('show');
            $(this).removeClass('active');
        }
    });

    // .newsroom animtation
    let i = 0;
    $('.news_direc .up').on('click', function() {
        --i;
        if(i <= 0) {
            i = 0;
        } else if (i >= 3) {
            i = 2;
        };
        $('.news_items').stop().animate({marginTop: -20 * i}, 400);

        $(this).attr('src', 'img/news_direc_up_on.svg');
        $(this).siblings('.news_direc .down').attr('src', 'img/news_direc_down_off.svg');
    });

    $('.news_direc .down').on('click', function() {
        ++i;
        if(i <= 0) {
            i = 0;
        } else if (i >= 3) {
            i = 2;
        };
        $('.news_items').stop().animate({marginTop: -20 * i}, 400);

        $(this).siblings('.news_direc .up').attr('src', 'img/news_direc_up_off.svg');
        $(this).attr('src', 'img/news_direc_down_on.svg');
    });

    $(document).mouseup(function(e) {
        var direc = $('.news_direc img');

        if(direc.has(e.target).length === 0){
            $('.news_direc .up').attr('src', 'img/news_direc_up_off.svg').siblings('.down').attr('src', 'img/news_direc_down_off.svg')
        }
    });


    // ==================== about ====================
    // (organization.html) .org_middle click animation
    $('.org_btn img').on('click', function() {
        var dm = $('.org_btn .dm'),
            mng = $('.org_btn .mng'),
            lab = $('.org_btn .lab')
            dm_has = $(this).hasClass('dm'),
            mng_has = $(this).hasClass('mng'),
            lab_has = $(this).hasClass('lab');

        if(dm_has == true) {
            dm.attr('src', '../img/domestic_btn_on.svg');
            mng.attr('src', '../img/management_btn_off.svg');
            lab.attr('src', '../img/laboratory_btn_off.svg');
            $('.org_detail img').removeClass('up');
            $('.org_detail .dm').addClass('up');
        } else if(mng_has == true) {
            dm.attr('src', '../img/domestic_btn_off.svg');
            mng.attr('src', '../img/management_btn_on.svg');
            lab.attr('src', '../img/laboratory_btn_off.svg');
            $('.org_detail img').removeClass('up');
            $('.org_detail .mng').addClass('up');
        } else if(lab_has == true) {
            dm.attr('src', '../img/domestic_btn_off.svg');
            mng.attr('src', '../img/management_btn_off.svg');
            lab.attr('src', '../img/laboratory_btn_on.svg');
            $('.org_detail img').removeClass('up');
            $('.org_detail .lab').addClass('up');
        }
    });

    // (laboratory.html) #info click, hover animation
    $('#info li').on('click', function() {
        $('#info li').removeClass('up');
        $(this).toggleClass('up');
    });

    $('.research img').hover(function() {
        $(this).next('.desc_wrap').addClass('up');
    }, function() {
        $(this).next('.desc_wrap').removeClass('up');
    });
    $('.research .desc_wrap').hover(function() {
        $(this).addClass('up');
    }, function() {
        $(this).removeClass('up');
    });
});