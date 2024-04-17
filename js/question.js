//data.js가져오기
import{questions} from './data.js'

//qusrtion.html에 있는 각 태그 위치를 정의 (변수로)
const progressValueEl = document.querySelector('.value')
// DOM (Document Object Model)_html을 찾을 수 있도록 지원
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0


// 선택 버튼에 EventListner을 달아놓는다
choice1El.addEventListener('click',function(){
  // console.log("첫번째 단추")
  nextQuestion(0)
})

choice2El.addEventListener('click',function(){
  // console.log("두번째 단추")
  nextQuestion(1)
})

function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
}

function nextQuestion(choiceNumber){
  if(currentNumber === questions.length - 1){
    // 결과 페이지 보이기
    showResultPage()
    return
  }
  currentNumber = currentNumber + 1;
  renderQuestion()
}

renderQuestion()
