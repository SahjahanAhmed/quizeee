import quizes from './quizes.js'

const checkBtn = document.querySelector('.check-btn')
const playAgainBtn = document.querySelector('.play-again')
const bottom = document.querySelector('.bottom')
const score = document.querySelector('.score')
const quizContainer = document.querySelector('quiz-container')
const question = document.querySelector('.question')
const options = document.querySelector('.options')
const allOptions = document.querySelectorAll('.option')
let currentQuiz = 0
let selectedAnswer = ''



checkBtn.addEventListener('click', () => {
  allOptions.forEach(option => {
    selectedAnswer = option.lastElementChild.innerHTML
  })

  let selectedOption = Array.from(allOptions).filter(option => option.firstElementChild.checked)[0]

  if (quizes[currentQuiz].ans == selectedOption?.lastElementChild.innerHTML && currentQuiz < quizes.length) {
    currentQuiz++
    showQuiz(currentQuiz)
    selectedOption.firstElementChild.checked = false
    allOptions.forEach(option => option.style.background = 'transparent')
  }

  if (selectedOption.firstElementChild.checked && selectedOption.lastElementChild.innerHTML != quizes[currentQuiz].ans) {
    selectedOption.style.background = 'orangered'
  }

})
const showQuiz = () => {
  score.innerHTML = `score: ${currentQuiz}`


  if (currentQuiz + 1 > quizes.length) {
    playAgainBtn.style.display = 'block'
    checkBtn.style.display = 'none'
    options.style.display = 'none'
    question.style.display = 'none'

    bottom.style.flexDirection = 'column-reverse'
    score.style.margin = '20px'
    score.style.flexGrow = '1'
    score.innerHTML = `Your score is <span style='font-size:1.8rem;'>${currentQuiz}</span> !`
  }


  playAgainBtn.addEventListener('click', () => {
    currentQuiz = 0
    options.style.display = 'flex'
    question.style.display = 'block'
    playAgainBtn.style.display = 'none';
    checkBtn.style.display = 'block'
    bottom.style.flexDirection = 'row'
    score.style.marginLeft = '6px'
    score.style.flexGrow = '0'
    showQuiz()
  })

  question.innerHTML = quizes[currentQuiz]?.que

  for (var i = 0; i < quizes[currentQuiz]?.options.length; i++) {
    allOptions[i].querySelector('label').innerHTML = quizes[currentQuiz]?.options[i]
  }
}



showQuiz(currentQuiz)