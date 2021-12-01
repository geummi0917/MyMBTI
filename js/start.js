(function(window, document) {
    'use strict';

    const main = document.querySelector('.section--main');
    const qna = document.querySelector('.section--qna');
    const result = document.querySelector('.section--result');

    const endPoint = 12;
    const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function calResult() {
        var result = select.indexOf(Math.max(...select));
        console.log(result);
        return result;
    }

    function setResult() {
        let point = calResult();

        const resultName = document.querySelector('.result__name');
        resultName.innerHTML = infoList[point].name;

        var resultImg = document.createElement('img');
        const imgDiv = document.querySelector('.result__img');
        var imgURL = 'img/image-' + point + '.png';

        resultImg.src = imgURL;
        resultImg.alt = point;
        imgDiv.appendChild(resultImg);

        const resultDesc = document.querySelector('.result__description');
        resultDesc.innerHTML = infoList[point].desc;
    }

    function goResult() {
        qna.style.WebkitAnimation = "fadeOut 1s";
        qna.style.Animation = "fadeOut 1s";
        setTimeout(() => {
            result.style.WebkitAnimation = "fadeIn 1s";
            result.style.Animation = "fadeIn 1s";
            setTimeout(() => {
                qna.style.display = "none";
                result.style.display = "block";
            }, 400)})

        setResult();
    }

    function addAnswer(answerText, qIdx, idx) {
        var a = document.querySelector('.qna__answerbox');
        var answer = document.createElement('button');
        answer.classList.add('answerList')
        answer.classList.add('fadeIn');

        a.appendChild(answer);
        answer.innerHTML = answerText;

        answer.addEventListener("click", function() {
            var children = document.querySelectorAll('.answerList');
            for(let i=0; i<children.length; i++) {
                children[i].disabled = true;
                children[i].style.WebkitAnimation = "fadeOut 0.5s";
                children[i].style.Animation = "fadeOut 0.5s";
            }
            setTimeout(() => {
                var target = qnaList[qIdx].a[idx].type;
                for(let i=0; i<target.length; i++) {
                    select[target[i]] += 1;
                }

                for(let i=0; i<children.length; i++) {
                    children[i].style.display = "none";
                }
                goNext(qIdx+1);

            }, 450)
        }, false);
    }

    function goNext(qIdx) {
        if(qIdx === endPoint) {
            goResult();
            return;
        }
        var q = document.querySelector('.qna__qbox');
        q.innerHTML = qnaList[qIdx].q;

        for(let i in qnaList[qIdx].a) {
            addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
        }

        var statusNum = document.querySelector('.status-num');
        let num = qIdx+1 + " / " + "12";
        statusNum.innerHTML = num;

        var statusBar = document.querySelector('.status-bar');
        statusBar.style.width = (100/endPoint) * (qIdx+1) + "%";

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
            }, 400)
            let qIdx = 0;
            goNext(qIdx);
        }, 400)
        
    })

})(window, document)

