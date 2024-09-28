

jQuery(function($) {
    var $bodyEl = $('body'),
        $sidedrawerEl = $('#sidedrawer');


    // ==========================================================================
    // Toggle Sidedrawer
    // ==========================================================================
    function showSidedrawer() {
        // show overlay
        var options = {
            onclose: function() {
                $sidedrawerEl
                    .removeClass('active')
                    .appendTo(document.body);
            }
        };

        var $overlayEl = $(mui.overlay('on', options));

        // show element
        $sidedrawerEl.appendTo($overlayEl);
        setTimeout(function() {
            $sidedrawerEl.addClass('active');
        }, 20);
    }


    function hideSidedrawer() {
        $bodyEl.toggleClass('hide-sidedrawer');
    }


    $('.js-show-sidedrawer').on('click', showSidedrawer);
    $('.js-hide-sidedrawer').on('click', hideSidedrawer);


    // ==========================================================================
    // Animate menu
    // ==========================================================================
    var $titleEls = $('strong', $sidedrawerEl);

    $titleEls
        .next()
        .hide();

    $titleEls.on('click', function() {
        $(this).next().slideToggle(200);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    const sidedrawer = document.getElementById('sidedrawer');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    window.toggleSidedrawer = function() {
        if (sidedrawer) {
            sidedrawer.classList.toggle('sidedrawer-open');
            console.log('Sidedrawer toggled'); // Для отладки
        }
    };
});



