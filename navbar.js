let isclose = true;
let  dropbtn = document.querySelector('.dropbtn');

function Click(){
    Script();
    dropbtn.disabled = true;
    isclose = false; 
    Time();
}

function CloseClick(){
    Script();
    dropbtn.disabled = false;
}


function Script(){
    document.querySelector('.droplist').classList.toggle("show");
    document.body.classList.toggle('wrapper-back')
    dropbtn.classList.toggle("dropbtn-off");
    isclose = true;
}

function Time(){
    setTimeout(function(){

        if(isclose == true){
        }else{
            Script();
            dropbtn.disabled = false;
        }
    }, 10000)
}



