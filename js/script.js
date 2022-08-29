const numb = document.querySelector("#number");
let conter = 0;
setInterval(() => {
    if(conter == 100){
        clearInterval();
    }else {
        conter += 1;
        numb.textContent = conter + "%";
    }
}, 200);