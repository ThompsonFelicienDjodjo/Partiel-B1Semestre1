let token = null
const loginPage = document.getElementById("login-form");
const textPage = document.querySelector('.card-text');
const cardLink = document.querySelector('.card-link');
const signPage = document.getElementById("signup-form");
const Api = ""







loginPage.addEventListener("submit", function (e) {
    e.preventDefault();

    loginPage.style.display = 'flex'
    textPage.style.display= 'none'

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const loginButton = document.querySelector('.btn')
    loginButton.addEventListener('click', ()=> {
        getToken(email.value, password.value).then((res)=> {
            if (res){
                console.log(res)
                displaytextPage()
            }
        })
    })
})

signPage.addEventListener("submit", function (e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginButton = document.querySelector('.btn')
    loginButton.addEventListener('click',() => {

    })
})

function displaytextpage() {
    loginPage.style.display = 'none';
    textPage.style.display = 'flex';
    getSelection().then((res)=> {console.log(res)})
}
if (!token){
    displayLoginPage()
}else{
    displaytextpage()
}


async function getToken(username, password) {
    let params = {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify({
            username:username,
            password: password,

        })
    }
    return await fetch(Api,params)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            token = data.token;
            return data
        })
}


