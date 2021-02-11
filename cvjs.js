var mybtn= document.getElementById("mybutton");
window.onscroll=function(){
    scrollFunction()};


function scrollFunction(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        mybtn.style.display="block";
    }
    else{
        mybtn.style.display="none";
    }
}

function topfunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
