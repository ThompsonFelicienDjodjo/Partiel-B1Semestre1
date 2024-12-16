let token = null
const loginPage = document.querySelector('.login');
const yomiyomiPage = document.querySelector('.yomiyomi');







function displayLoginPage() {

    loginPage.style.display = 'block'
    yomiyomiPage.style.display = 'none'

    let username = document.querySelector('.username')
    let password = document.querySelector('.password')
    let loginButton = document.querySelector('.submitLogin')
    loginButton.addEventListener('click', ()=> {
        token = data
        displayYomiyomi()
    })
}