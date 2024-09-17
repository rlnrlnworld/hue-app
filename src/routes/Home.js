import { Component } from '../core/setting'

export default class Home extends Component {
    render() {
        this.el.classList.add('container')
        this.el.innerHTML = `
            <div class="titleIcon">
                <img src="https://i.imgur.com/E7Cyqw7.png">
            </div>
            <form class="login-form">
                <input id="works" placeholder="기관">
                <input id="userId" placeholder="아이디">
                <input id="userPwd" placeholder="비밀번호" type="password">
                <button type="submit" disabled>로그인</button>
            </form>
        `

        const workInput = this.el.querySelector('#works')
        const idInput = this.el.querySelector('#userId')
        const pwdInput = this.el.querySelector('#userPwd')
        const logInBtn = this.el.querySelector('button')

        const checkInputs = () => {
            if (workInput.value && idInput.value && pwdInput.value ) {
                logInBtn.classList.add('active')
                logInBtn.disabled = false
            } else {
                logInBtn.classList.remove('active')
                logInBtn.disabled = true
            }
        }

        workInput.addEventListener('input', checkInputs)
        idInput.addEventListener('input', checkInputs)
        pwdInput.addEventListener('input', checkInputs)
    }
}