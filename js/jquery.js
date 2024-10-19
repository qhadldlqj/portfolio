$(document).ready(function () {
    //menu//
    //mlnb01//
    $('.menu').on('click', function () {
        $('.mlnb').css({
            width: '100%',
            height: '100%',
        });
    });
    $('i').on('click', function () {
        $('.mlnb').css({
            width: '0',
        });
    });
    $('.mlnb li').click(function () {
        $('.mlnb').css({
            width: '0',
        });
    });

    /*each문 사용법
			$(this).parents('.mlnb').each(function(){
					$(this).css({
						width:'50%',
						height:'100%'
					})
				  })*/

    /*$(this).parents('.mlnb').each(function(){
					$(this).css({
						width:'0'
						//height:'0'
					})
				  })*/

    //menu//

    //fullpage//
    $('#fullpage').fullpage({

        sectionSelector: '.section',
        scrolloverflow: true,
        anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage'],
        navigation: true,
        navigationTooltips: [
            'Intro',
            'About',
            'Portfolio01',
            'Portfolio02',
            'Portfolio03',
            'Portfolio04',
            'Portfolio05',
            'Contact',
        ],
        slidesNavigation: true,
        menu: '#menu',
        responsiveWidth: 768,//해상도768일때풀페이지사용중지//
    });
    //fullpage//
   
   
       
    
    
   

    //클립보드복사//
    function copyToClipboard(val) {
        var t = document.createElement('textarea');
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    }
    $('.cInfo01 span').click(function () {
        copyToClipboard('qhadldlqj5@naver.com');
        alert('클립보드로 복사되었습니다.');
    });
    $('.cInfo02 span').click(function () {
        copyToClipboard('qhadldlqj5');
        alert('클립보드로 복사되었습니다.');
    });
    $('.cInfo03 span').click(function () {
        copyToClipboard('http://www.youtube.com/@co-cherry');
        alert('클립보드로 복사되었습니다.');
    });
    //클립보드복사//

    //경고창//
    //이메일주소 카피,되도록이면 크롬과 엣지 써달라고 alert//
    //경고창//

    // $(".gallOpen").on('click',function(event){
    //     event.preventDefault();
    //     var src=$(this).attr("href");
    
    //     $(".gallery_img").css({
    //       backgroundImage : 'url('+ src +')',
    //     }).parent().fadeIn();
    // });

    $(".gallOpen").on('click',function(event){
        event.preventDefault();
        var src=$(this).attr('href');

        $(".gallery_img").find('a').css({
            backgroundImage : 'url('+src+')'
        });
        $(".gallery_img").parent().fadeIn();
    });

    $(".close").on('click',function(event){
        event.preventDefault();
        $(".gallery_img").scrollTop(0)
        $(".gallery_bg").fadeOut();
    });

    $(".gallery_bg").on('click',function(){
        $(".gallery_img").scrollTop(0)
        $(".gallery_bg").fadeOut();
    });

}); //전체 닫기
