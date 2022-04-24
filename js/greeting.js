const loginForm = document.querySelector('#loginForm')
const loginInput = document.querySelector('#loginForm input') // input태그 가져오기

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

const greeting = document.querySelector('#greeting')

// 이름받은 변수값을 보이게 하는 함수
function paintGreetings(userName) {
  greeting.innerText = `안녕하세요! ${userName} 만나서 방가방가 :)`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

// 제출받은 이름처리 함수
function onLoginSubmit(e) {
  e.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username) // LocalStorage에 받은 값 넣기
  paintGreetings(username)
}

// 일단 LocalStorage에 넣을 이름을 받고
const saveUserName = localStorage.getItem(USERNAME_KEY)

if (saveUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  paintGreetings(saveUserName)
}
