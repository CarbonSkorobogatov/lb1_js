function Click(){

    document.getElementById('droplist').classList.toggle("show");
    document.body.classList.toggle('wrapper-back')

    /*---------------------------------------------------------------------------*/ 
    document.querySelector('.dropbtn').disabled = true;
    document.querySelector('.dropbtn:hover').style.backgroundColor =  "#0a1925dc";
    /*---------------------------------------------------------------------------*/ 

}


