let rezultati =document.getElementById("result");

function shkruajVleren(vlera){

    if(rezultati.textContent.includes('Infinity')){
        clearRes();
    }
    rezultati.textContent += vlera;
}

function clearRes(){
    rezultati.textContent = " ";
}

function kalkulo(){
    result.textContent = eval(rezultati.textContent)
}