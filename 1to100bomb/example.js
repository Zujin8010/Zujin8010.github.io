//宣告DOM
const guessInput = document.getElementById('guess_input')
const hintArea = document.querySelector('.hint')
const guessBtn = document.getElementById('guess_btn')
const restartBtn = document.getElementById('restart_btn')
const showAnswerBtn = document.querySelector('#show_answer_btn')

//宣告變數
let minNum, maxNum, answerNum, guessNum
//產生遊戲開始的數字
showAnswerBtn.addEventListener('click', function () {
    alert(answerNum)
})

restartBtn.addEventListener('click', function () {
    init()
})

guessBtn.addEventListener('click', guess)

window.onload = function () {
    init()
}
function guess() {
    const val = guessInput.value
    if (val === '' || isNaN(val) || val[0] === '0') {
        alert('請輸入正確數字')

        return
    }
    guessNum = parseInt(val)
    if (guessNum < minNum || guessNum > maxNum) {
        showHint()
        guessInput.value = ''
        alert('請確認輸入範圍')
        return
    }

    if (guessNum === answerNum) {
        alert(`GG答案是${answerNum}`)
        init()
        return
    } else if (guessNum < answerNum) {
        minNum = guessNum
    } else if (guessNum > answerNum) {
        maxNum = guessNum
    }
    guessInput.value = ''
    showHint()
}

function init() {
    answerNum = generateAnswer()
    guessInput.value = ''
    minNum = 1
    maxNum = 100
    answerNum = generateAnswer()
    hintArea.textContent = `請輸入${minNum}-${maxNum}之間的數字`
}
function showHint() {
    const hinStr = `請輸入${minNum}-${maxNum}之間的數字`
    // hintArea.textContent=`請輸入${minNum}-${maxNum}之間的數字`
    console.log(hintStr)
}
function generateAnswer() {
    return getRandomIntInclusive(1, 100)

}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}