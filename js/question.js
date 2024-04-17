//data.js가져오기
import{questions} from './data.js'

//qusrtion.html에 있는 각 태그 위치를 정의 (변수로)
const progressValueEl = document.querySelector('.value')
// DOM (Document Object Model)_html을 찾을 수 있도록 지원
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choicel1El = document.querySelector('.choice1')
const choice21El = document.querySelector('.choice2')

let currentNumber = 0

function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choicel1El.innerHTML = question.choices[0].text
  choice21El.innerHTML = question.choices[1].text
}

renderQuestion()