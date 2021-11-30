(function(window, document) {
    'use strict';

    const main = document.querySelector('.section--main');
    const qna = document.querySelector('.section--qna');

    // function start() {
    //     console.log("클릭");
    //     main.style.display = "none";
    //     qna.style.display = "block";
    // }

    $('.btn-start').click(function() {
        main.style.display = "none";
        qna.style.display = "block";
    })

})(window, document)

