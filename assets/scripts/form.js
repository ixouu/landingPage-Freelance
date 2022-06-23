const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const messageInput = document.querySelector('#messageInput');
const inpSpan = document.querySelectorAll('.required');
const inpIcons = document.querySelectorAll('.checkIcon');

nameInput.addEventListener('click', formNameCheck);


function formNameCheck (){
    nameInput.addEventListener('input', (e)=>{
        if(e.target.value.length <= 3){
            inpSpan[0].style.opacity = '1';
            inpIcons[0].src = "./assets/images/svg/error.svg";
            inpIcons[0].style.display = 'inline';
        } else {
            inpSpan[0].style.opacity= '0';
            inpIcons[0].src = "./assets/images/svg/check.svg";
            inpIcons[0].style.display = 'inline';
        }
    });
}

emailInput.addEventListener('click', formEmailCheck);

function formEmailCheck(){
    emailInput.addEventListener('input', (e)=>{
        const regexEmail = /\S+@\S+\.\S+/;
        if (e.target.value.search(regexEmail) === 0){
            inpSpan[1].style.opacity = '0';
            inpIcons[1].src = "./assets/images/svg/check.svg";
            inpIcons[1].style.display = 'block';
        }else if (e.target.value.search(regexEmail) === -1){
            inpSpan[1].style.opacity= '1';
            inpIcons[1].src = "./assets/images/svg/error.svg";
            inpIcons[1].style.display = 'block';
        }
    })
}



messageInput.addEventListener('input', (e) =>{
    if(e.target.value.length <= 10){
        inpSpan[2].style.opacity = "1";
    }else{
        inpSpan[2].style.opacity = "0";
    }
});