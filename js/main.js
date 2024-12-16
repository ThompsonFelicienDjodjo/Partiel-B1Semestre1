let token = null
const loginPage = document.querySelector('.login');
const textPage = document.querySelector('.card-text')
const cardLink = document.querySelector('.card-link')
const Api = ""







function displayLoginPage() {

    loginPage.style.display = 'flex'
    textPage.style.display= 'none'

    const username = document.querySelector('.username')
    const password = document.querySelector('.password')
    const loginButton = document.querySelector('.submitLogin')
    loginButton.addEventListener('click', ()=> {
        getToken(username.value, password.value).then((res)=> {
            if (res.token){
                displaytextPage()
            }
        })
    })
}


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


