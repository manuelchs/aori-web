$(function() {
    $('.fade').addClass('fade-end');
    var clicked = false;
    /** SCROLL **/
    $('.link-navbar').click(function(event){
        event.preventDefault();
        document.querySelector('#nav').classList.remove('hide-nav');
        if ( location.pathname == '/' ) {
            scrollName = '#' + $(this).attr('scroll');
            console.log(scrollName);
            clicked = true;
            $('html, body').animate({
                scrollTop: $(scrollName).offset().top - 90
            }, 600, function() {
                if ( screen.width < 900 ) {
                    $('.menu-wrapper').removeClass('d-flex');
                    $('.social-wrapper').removeClass('d-flex');
                    $('#burger').removeClass('open');
                }
                setTimeout(function() {
                    clicked = false;
                }, 200);
                // alert('terminé');
                // setTimeout(function() {
                //     document.querySelector('#nav').classList.remove('hide-nav');
                // }, 100);
            });
        } else {
            location.href = '/#' + $(this).attr('scroll');
        }
    });


    var nav = document.querySelector("#nav");
    var scrollPos = 0;
    var scrollUp = 0;
    var scrollDown = 0;
    var counter;
    
    window.addEventListener('scroll', function(){
        clearTimeout(counter);
        if ( !clicked ) {
            if ((document.body.getBoundingClientRect()).top > scrollPos) {
                // up
                scrollDown = 0;
                scrollUp++;
                if ( scrollUp > 30 ) {
                    nav.classList.remove('hide-nav');
                }
            } else {
                //down
                scrollUp = 0;
                scrollDown++;
                if ( scrollDown > 50 ) {
                    nav.classList.add('hide-nav');
                }
            }
        
            // saves the new position for iteration.
            scrollPos = (document.body.getBoundingClientRect()).top;
            if ( window.scrollY < 120 ) {
                nav.classList.remove('hide-nav');
            }
        } else {
            nav.classList.remove('hide-nav');
        }



        // *** ANIMACIONES EN SCROLL *** //
        const elements = document.querySelectorAll('.fade');
        var offset = screen.width < 900 ? -100 : 120;
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            const elementPosition = element.getBoundingClientRect();
            const elementCenter = elementPosition.height / 2;
            console.log(offset);
            if ( elementPosition.top < window.innerHeight - elementPosition.height + elementCenter && elementPosition.top > (elementPosition.height - -100) * -1 ) {
                element.classList.add('fade-end');
            } else {
                element.classList.remove('fade-end');
            }
        }
    });

    $('body').mouseover(function(event) {
        var y = event.clientY;
        if ( y <= 74 && $('#nav').hasClass('hide-nav')) {
            counter = setTimeout(() => {
                document.querySelector('#nav').classList.remove('hide-nav');
            }, 600);
        } else {
            clearTimeout(counter);
        }
    });

    /*** RESPONSIVE ***/
    $('#burger').click(function() {
        if( $(this).hasClass('open') ) {
            $(this).removeClass('open');
            $('.menu-wrapper').removeClass('d-flex');
            $('.social-wrapper').removeClass('d-flex');
        } else {
            $(this).addClass('open');
            $('.menu-wrapper').addClass('d-flex');
            $('.social-wrapper').addClass('d-flex');
        }
    });

    $('#navbar-form').click(function() {
        event.preventDefault();
        $('#formModal').addClass('modal-show');
    });
});