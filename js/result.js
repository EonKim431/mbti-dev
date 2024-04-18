import { results, mbtis } from "./data.js";
// http://127.0.0.1:5500/result.html?mbti=istj
// mbti=istj 를 뽑아와야 함
// 쿼리 스트링

const mbti = new URLSearchParams(location.search).get("mbti")
// console.log('mbti = ' + mbti)

const result = results[mbtis[mbti]]
// console.log(result)

const titleEl = document.querySelector(".page-title")
// page-title클래스
const characterEl = document.querySelector(".character")
const boxEls = document.querySelectorAll(".box")
const jobsEls = document.querySelectorAll(".job")
const lectureEl = document.querySelector(".lecture")
const lectureImgEl = document.querySelector(".lecture img")
// lecture 클래스 밑의 img태그

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(
  function(boxEl, index){
    boxEl.innerHTML = result.results[index]
})
jobsEls.forEach(
  function(job,index){
  job.innerHTML = result.jobs[index]
})
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg
