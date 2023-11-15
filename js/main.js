$(document).ready(function () {
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500)
    })

    $('.login-ul .last').click(function () {
        $('.lan').toggleClass('show')
    })

    $(window).scroll(function () {
        let scroll = $(window).scrollTop()
        // one-all
        if (scroll > 780) {
            $('.oneall-box').addClass('show')
            $('.swing').addClass('show')
        }
        // discount
        if (scroll > 1500) {
            $('.discount h1').addClass('show')
            $('.discount-wrap>p').addClass('show')
        }
        if (scroll > 1800) {
            $('.dis-img').addClass('show')
            $('.discount .button').addClass('show')
        } 
        // play
        if (scroll > 3200) {
            $('.play h1').addClass('show')
        } 
        if (scroll > 3400) {
            $('.play-wrap> p').addClass('show')
        } 
        if (scroll > 3500) {
            $('.play .bx-wrapper').addClass('show')
        } 
        if (scroll > 3800) {
            $('.playbtn').addClass('show')
        } 
        // tips
        if (scroll > 4300) {
            $('.tips h1').addClass('show')
            $('.tips> p').addClass('show')
        } 
        if (scroll > 4500) {
            $('.tip').addClass('show')
        }
        //collect
        if (scroll > 5700) {
            $('.collect h1').addClass('show')
            $('.collect p').addClass('show')
        } 
        if (scroll > 6000) {
            $('.col').addClass('show')
        }
    })
})