/**
 * Created by Administrator on 2016/12/23.
 */
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    new WOW().init();
}
;
//     ��˾ͷ���绰Ч��
setInterval(function () {
    $('.imgP2 img').toggleClass('animated bounce');
}, 1000 * 2);
//    ��˾����л�
function toogle() {
    $(".profile").click(function () {
        $(".banner_img_02").hide();
        $(".banner_img_01").show();
    });
    $(".vidios").click(function () {
        $(".banner_img_01").hide();
        $(".banner_img_02").show();
    });
}
toogle();

//    ����Ч��
(function () {
    $('.font_imh span').addClass('span');
})();
setInterval(function () {
    $('.font_imh span').toggleClass('span');
    $('.font_imv').toggleClass('animated bounceInLeft');
}, 1000 * 3);


//��������
(function () {
    $(".pro_list_show_lf li").click(function () {
        $(".pro_list_show_lf li").find('h3').removeClass("active");
        $(".pro_list_show_lf li").find('div').removeClass("active").find('p').removeClass('active');
        $(this).find('h3').addClass("active");
        $(this) .find('div').addClass("active").find('p').eq(0).addClass('active');
    })
})();
var tabToggle=function () {
    var widget = $('.news_mild_lf_b');
    var tabs = $('.news_mild_rt  a');
    var content = $('.news_mild_rt li');
    $(tabs).click(function (e) {
        var adShow=$('.adShow');
        e.preventDefault();
        var index = $(this).data('index');
        tabs.removeClass('active');
        content.removeClass('active');
        widget.removeClass('active');
        $(this).addClass('active');
        $(this).find()
        content.eq(index).addClass('active');
        widget.eq(index).addClass('active');
        adShow.text($(this).text());
    });
}
tabToggle();
//��Ƶ��ʾ�л�
var videoTabToggle=function () {
    var tabSpan = $('#p1 span');
    var contentToggle = $('#video_show_ul li');
    $(tabSpan).click(function (e) {
        e.preventDefault();
        var index = $(this).data('index');
        tabSpan.removeClass('active');
        contentToggle.removeClass('active');
        $(this).addClass('active');
        contentToggle.eq(index).addClass('active');
    });
}
videoTabToggle();


