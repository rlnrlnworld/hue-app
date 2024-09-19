import { Component } from '../core/setting'

export default class Home extends Component {
    render() {
        this.el.classList.add('container')
        this.el.innerHTML = `
            <div class="titleIcon">
                <img src="https://i.imgur.com/E7Cyqw7.png">
            </div>
            <form class="login-form">
                <div class="input-wrapper">
                    <input id="works" placeholder=" " required>
                    <label for="works">기관</label>
                </div>
                <div class="input-wrapper">
                    <input id="userId" placeholder=" " required>
                    <label for="userId">아이디</label>
                    <span class="error" id="userIdError" style="display:none;">아이디 형식에 맞게 입력해주세요.</span>
                </div>
                <div class="input-wrapper">
                    <input id="userPwd" placeholder=" " type="password" required>
                    <label for="userPwd">비밀번호</label>
                    <span class="error" id="userPwdError" style="display:none;">비밀번호는 8자 이상이어야 합니다.</span>
                </div>
                <div class="input-wrapper">
                    <button type="submit" disabled>로그인</button>
                </div>
            </form>
        `

        const workInput = this.el.querySelector('#works')
        const idInput = this.el.querySelector('#userId')
        const pwdInput = this.el.querySelector('#userPwd')
        const logInBtn = this.el.querySelector('button')
        const userIdError = this.el.querySelector('#userIdError')
        const userPwdError = this.el.querySelector('#userPwdError')

        const checkInputs = () => {
            const isIdValid = /^[A-Za-z]+$/.test(idInput.value);
            const isPwdValid = pwdInput.value.length >= 8;

            userIdError.style.display = isIdValid || idInput.value === '' ? 'none' : 'block';
            userPwdError.style.display = isPwdValid || pwdInput.value === '' ? 'none' : 'block';

            if (workInput.value && isIdValid && isPwdValid) {
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