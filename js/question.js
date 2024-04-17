//data.js가져오기
import{questions} from './data.js'

//qusrtion.html에 있는 각 태그 위치를 정의 (변수로)
const progressValueEl = document.querySelector('.progress .value')
// DOM (Document Object Model)_html을 찾을 수 있도록 지원
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')
// MBTI타입 저장하는 변수
let mbti = "";

let currentNumber = 0;


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
  const question = questions[currentNumber]

  if(currentNumber === questions.length - 1){
    // 결과 페이지 보이기
    showResultPage()
    return
  }

  // 해당 mbti타입을 읽어와야 함
  mbti = mbti + question.choices[choiceNumber].value
  console.log("mbti =" + mbti)

  currentNumber = currentNumber + 1;
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
  renderQuestion()
}

function showResultPage(){
  // http://127.0.0.1:5500/result.html?mbti=istj
  // 이 url로 보내야함
  location.href = './result.html?mbti='+mbti;// 상대적 위치
}

renderQuestion()
