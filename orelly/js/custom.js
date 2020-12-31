var bar=document.querySelector('.barsicon')
var barsnav=document.querySelector('.bars')
var wrong=document.querySelector('.wrong')
var myBoutton=document.querySelector('.myBtn');

var aroowdown=document.querySelector('.aroowdown')
var featers=document.querySelector('.featers')

bar.onclick=function barss(){
 
  barsnav.style.display = 'block' 
}


wrong.onclick=function barsss(){
   barsnav.style.display = 'none' 
}
aroowdown.onmouseover=function over(){
  featers.style.display = 'block'
}
aroowdown.onmouseout=function over(){
  featers.style.display = 'none'
}
featers.onmouseover=function over(){
  featers.style.display = 'block'
}
featers.onmouseout=function over(){
  featers.style.display = 'none'
}


window.onscroll=function(){
  console.log(pageYOffset);
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