var myBoutton=document.querySelector('.myBtn');

window.onscroll=function(){
 
    if(window.pageYOffset>500){
        myBoutton.style.display="block" ;
    }
    else{
        myBoutton.style.display="none";
    }
  };
  
  myBoutton.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
        
    });
  
  }