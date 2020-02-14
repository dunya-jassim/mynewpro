/*  Global $, alert , console */
$(function(){
    //Show the color Theme
    $('.gear-check').click(function(){
        $('.option-box').toggleClass('new');
        if($('.option-box').hasClass('new')){
            $('.option-box').animate({
                left:0
            },500)
        }else{
            $('.option-box').animate({
                left : -200
            },300)    
    }
    })
    //Change Theme Color
    var colorLi = $('.option-color ul li');

    colorLi.eq(0).css('background-color','#148545').end()
    .eq(1).css('background-color','#851476').end()
    .eq(2).css('background-color','#a51111').end()
    .eq(3).css('background-color','rgb(217, 187, 8)').end();

    colorLi.click(function(){
        $('link[href*="theme"]').attr('href',$(this).data('color'));
    })

    //NavBar
    $('.navbar .navbar-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.navbar .nav li a').click(function(e){
    
        e.preventDefault();
    
        $('html ,body').animate({
                scrollTop: $('#' +  $(this).data('click')).offset().top + 1
                
        }, 1000)})

        //Make Navbar opacity
        var NavBar = $('.navbar');
        $(window).scroll(function(){
            if($(window).scrollTop() >= NavBar.height()){
               NavBar.addClass('scrolled')
            }else{
                NavBar.removeClass('scrolled')
            }
        })

    //Show the Scroll top btn
    $(window).scroll(function(){
        if($(this).scrollTop() >= 850){
            $('.scroll').show();
        }else{
            $('.scroll').hide();
        }
    })
    //Make him scroll
    $('.scroll').click(function(){
        $('html, body').animate({scrollTop:0},700)
    })
})
//loading Page
$(window).on('load', function() {  
    $('.loading').fadeOut(1000); 
    $('body').css('overflow','auto')
});
   