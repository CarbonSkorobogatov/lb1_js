function Click(){
    Script();
    document.querySelector('.dropbtn').disabled = true;
}

function CloseClick(){
    Script();
    document.querySelector('.dropbtn').disabled = false;
}


function Script(){
    document.getElementById('droplist').classList.toggle("show");
    document.body.classList.toggle('wrapper-back')
    document.querySelector('.dropbtn').classList.toggle("dropbtn-off");
}

