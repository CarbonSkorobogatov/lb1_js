let isclose = true;

function Click(){
    Script();
    document.querySelector('.dropbtn').disabled = true;
    isclose = false; 
    Time();
}

function CloseClick(){
    Script();
    document.querySelector('.dropbtn').disabled = false;
}


function Script(){
    document.getElementById('droplist').classList.toggle("show");
    document.body.classList.toggle('wrapper-back')
    document.querySelector('.dropbtn').classList.toggle("dropbtn-off");
    isclose = true;
}

function Time(){
    setTimeout(function(){
        if(isclose == true){

        }else{
            Script();
            document.querySelector('.dropbtn').disabled = false;
        }
    }, 10000)
}



