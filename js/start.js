(function(window, document) {
    'use strict';

    const main = document.querySelector('.section--main');
    const qna = document.querySelector('.section--qna');

    $('.btn-start').click(function() {
        main.style.WebkitAnimation = "fadeOut 1s";
        main.style.Animation = "fadeOut 1s";
        setTimeout(() => {
            qna.style.WebkitAnimation = "fadeIn 1s";
            qna.style.Animation = "fadeIn 1s";
            setTimeout(() => {
                main.style.display = "none";
                qna.style.display = "block";
            }, 500)
        }, 500)
        
    })

})(window, document)

