const btnModal = document.querySelector('#btn-modal');
const modal = document.querySelector("#modal");
const close = document.querySelector("#close");
const submit = document.querySelector('#sub')

const name = document.querySelector("#nom");
const mail = document.querySelector("#mail");
const mdp = document.querySelector("#mdp");

const saveInfos = () => {
    window.localStorage.setItem('nom', name.value);
    window.localStorage.setItem('mail', mail.value);
    window.localStorage.setItem('mdp', mdp.value);
}

const init = () => {
    btnModal.addEventListener('click', () => {
        modal.style.display = "block";
    })

    close.addEventListener('click', () => {
        modal.style.display = "none";
    })

    window.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.style.display = "none";
        }
    })

    submit.addEventListener('click', saveInfos);
}

window.addEventListener('click', init)