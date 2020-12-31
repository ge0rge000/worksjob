var element =document.querySelector('.linee')
var myBoutton=document.querySelector('.myBtn');
element.onmouseover =function() {
    element.classList.add('animate__animated', 'animate__bounceOutLeft');

};



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
        top:100,
        behavior:'smooth'
        
    });
  
  }