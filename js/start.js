(function(window, document) {
    'use strict';

    const main = document.querySelector('.section--main');
    const qna = document.querySelector('.section--qna');

    function addAnswer(answerText, qIdx) {
        var a = document.querySelector('.qna__answerbox');
        var answer = document.createElement('button');
        answer.classList.add('answerList');
        a.appendChild(answer);
        answer.innerHTML = answerText;

        answer.addEventListener("click", function() {
            var children = document.querySelectorAll('.answerList');
            for(let i=0; i<children.length; i++) {
                children[i].disabled = true;
                children[i].style.display = "none";
            }
            goNext(++qIdx);
        }, false);
    }

    function goNext(qIdx) {
        var q = document.querySelector('.qna__qbox');
        q.innerHTML = qnaList[qIdx].q;

        for(let i in qnaList[qIdx].a) {
            addAnswer(qnaList[qIdx].a[i].answer, qIdx);
        }
    }

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
            let qIdx = 0;
            goNext(qIdx);
        }, 500)
        
    })

})(window, document)

