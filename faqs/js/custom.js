////////الرئيسى

var btnwindows =document.querySelector('.windows')


/////////تعريفات nav
var officenav=document.querySelector(".officenav") ////فاعل
var officenavv=document.querySelector(".officenavv")
var windowsnav=document.querySelector(".window")
var windowsnavv=document.querySelector(".windowse")
var insidernav=document.querySelector(".windowsinsider")
var insidernavv=document.querySelector(".windowsinsiderprev")

//////تعريف btn
var windowsProduct1=document.querySelector(".windowsProductbtninput");
var windowsProduct2=document.querySelector(".windowsProductbtninput2");
var windowsProduct3=document.querySelector(".windowsProductbtninput3");
var windowsProduct4=document.querySelector(".windowsProductbtninput4");
/////تعريف مفعول btn
var paragraph1=document.querySelector('.paragraph')
var paragraph2=document.querySelector('.paragraph2')
var paragraph3=document.querySelector('.paragraph3')
var paragraph4=document.querySelector('.paragraph4')

/////الرئيسى 
var btnoffice=document.querySelector('.office')

/////   فاعل تعريف btn office
var officeProductbtninput1=document.querySelector(".officeProductbtninput");
var officeProductbtninput2=document.querySelector(".officeProductbtninput2");
var officeProductbtninput3=document.querySelector(".officeProductbtninput3");
var officeProductbtninput4=document.querySelector(".officeProductbtninput4");
/////تعريف مفعول btn office
var ofparagraph1=document.querySelector('.ofparagraph')
var ofparagraph2=document.querySelector('.ofparagraph2')
var ofparagraph3=document.querySelector('.ofparagraph3')
var ofparagraph4=document.querySelector('.ofparagraph4')
///////////////////////////////////icons
var iconplus=document.querySelector('.iconplus')
var iconminus=document.querySelector('.iconminus')
var iconplus1=document.querySelector('.iconplus1')
var iconminus1=document.querySelector('.iconminus1')
var iconplus2=document.querySelector('.iconplus2')
var iconminus2=document.querySelector('.iconminus2')
var iconplus3=document.querySelector('.iconplus3')
var iconminus3=document.querySelector('.iconminus3')
var iconplus4=document.querySelector('.iconplus4')
var iconminus4=document.querySelector('.iconminus4')
var iconplus5=document.querySelector('.iconplus5')
var iconminus5=document.querySelector('.iconminus5')
var iconplus6=document.querySelector('.iconplus6')
var iconminus6=document.querySelector('.iconminus6')
var iconplus7=document.querySelector('.iconplus7')
var iconminus7=document.querySelector('.iconminus7')
var iconplus8=document.querySelector('.iconplus8')
var iconminus8=document.querySelector('.iconminus8')
var iconplus9=document.querySelector('.iconplus9')
var iconminus9=document.querySelector('.iconminus9')





btnwindows.onclick=function display1(){
  var x=[windowsProduct1,windowsProduct2,windowsProduct3,windowsProduct4]
  
  for(  var i=0;i<5;i++){
  if ((x[i].style.display==="none") ) {
    x[i].style.display="block";

    if(iconplus.style.zIndex="1" ){
      iconminus.style.zIndex="1"
        } 

  }
     else {
      x[i].style.display="none"
      if(iconminus.style.zIndex="1" ){
        iconminus.style.zIndex="-1"
            } 
    
       }
         }
    
    }
 
    windowsProduct1.onclick=function display2(){
      if(paragraph1.style.display==="none"){
       paragraph1.style.display="block"
       
      
    if(iconplus1.style.zIndex="1" ){
      iconminus1.style.zIndex="1"
        } 
      }
      else{
       paragraph1.style.display="none"
       if(iconminus1.style.zIndex="1" ){
        iconminus1.style.zIndex="-1"
            } 
       
       
      }
     }

    windowsProduct2.onclick=function display2(){
      if(paragraph2.style.display==="none"){
       paragraph2.style.display="block"
       if(iconplus2.style.zIndex="1" ){
        iconminus2.style.zIndex="1"
          } 
      }
      else{
       paragraph2.style.display="none"
       if(iconminus2.style.zIndex="1" ){
        iconminus2.style.zIndex="-1"
            } 
       
      }
     }
 
     
    windowsProduct3.onclick=function display2(){
      if(paragraph3.style.display==="none"){
       paragraph3.style.display="block"
       if(iconplus3.style.zIndex="1" ){
        iconminus3.style.zIndex="1"
          } 

      }
      else{
       paragraph3.style.display="none"
       if(iconminus3.style.zIndex="1" ){
        iconminus3.style.zIndex="-1"
            } 
      }
     }
 

     windowsProduct4.onclick=function display2(){
      if(paragraph4.style.display==="none"){
       paragraph4.style.display="block"
       if(iconplus4.style.zIndex="1" ){
        iconminus4.style.zIndex="1"
          } 
      }
      else{
       paragraph4.style.display="none"
       if(iconminus4.style.zIndex="1" ){
        iconminus4.style.zIndex="-1"
            } 
      }
     }


 
    
 
btnoffice.onclick=function display3(){
  var x=[officeProductbtninput1,officeProductbtninput2,officeProductbtninput3,officeProductbtninput4]
  for(  var i=0;i<5;i++){
  if (x[i].style.display==="none") {
    x[i].style.display="block"
    
    if(iconplus5.style.zIndex="1" ){
      iconminus5.style.zIndex="1"
        } 
      } 
     else {
      x[i].style.display="none"
      if(iconminus5.style.zIndex="1" ){
        iconminus5.style.zIndex="-1"
            } 
    


      }
    }
    }
    
    officeProductbtninput1.onclick=function display4(){
      if(ofparagraph1.style.display==="none"){
        ofparagraph1.style.display="block"
        if(iconplus6.style.zIndex="1" ){
          iconminus6.style.zIndex="1"
            } 
      }
      else{
        ofparagraph1.style.display="none"
        if(iconminus6.style.zIndex="1" ){
          iconminus6.style.zIndex="-1"
              } 
      }
     }
     officeProductbtninput2.onclick=function display4(){
      if(ofparagraph2.style.display==="none"){
        ofparagraph2.style.display="block"
        if(iconplus7.style.zIndex="1" ){
          iconminus7.style.zIndex="1"
            } 
      }
      else{
        ofparagraph2.style.display="none"
        if(iconminus7.style.zIndex="1" ){
          iconminus7.style.zIndex="-1"
              } 
      }
     }
     officeProductbtninput3.onclick=function display4(){
      if(ofparagraph3.style.display==="none"){
        ofparagraph3.style.display="block"
        if(iconplus8.style.zIndex="1" ){
          iconminus8.style.zIndex="1"
            } 
      }
      else{
        ofparagraph3.style.display="none"
        if(iconminus8.style.zIndex="1" ){
          iconminus8.style.zIndex="-1"
              } 
      }
     }
     officeProductbtninput4.onclick=function display4(){
      if(ofparagraph4.style.display==="none"){
        ofparagraph4.style.display="block"
        if(iconplus9.style.zIndex="1" ){
          iconminus9.style.zIndex="1"
            } 
      }
      else{
        ofparagraph4.style.display="none"
        if(iconminus9.style.zIndex="1" ){
          iconminus9.style.zIndex="-1"
              } 
      }
     }


  
  officenav.onmouseover=function office(){
       if(officenavv.style.display="none"){
         officenavv.style.display="block"
     }
   
  }
  officenav.onmouseout=function office(){
    if(officenavv.style.display="block"){
      officenavv.style.display="none"
  }

}
  officenavv.onmouseover=function officee(){
   
    if(officenavv.style.display="block"){
      officenavv.style.display="block"
  }


}
  
  officenavv.onmouseout=function officee(){
   
    if(officenavv.style.display="block"){
      officenavv.style.display="none"
  } 


}
windowsnav.onmouseover=function windowse(){
  if(windowsnavv.style.display="none"){
    windowsnavv.style.display="block"
}

}
windowsnav.onmouseout=function windowsee(){
if(windowsnavv.style.display="block"){
  windowsnavv.style.display="none"
}

}
windowsnavv.onmouseover=function windowseee(){

if(windowsnavv.style.display="block"){
  windowsnavv.style.display="block"
}


}

windowsnavv.onmouseout=function windowseeee(){

if(windowsnavv.style.display="block"){
  windowsnavv.style.display="none"
} 

}

insidernav.onmouseover=function insidernave(){
  if(insidernavv.style.display="none"){
    insidernavv.style.display="block"
}

}
insidernav.onmouseout=function insidernavee(){
if(insidernavv.style.display="block"){
  insidernavv.style.display="none"
}

}
insidernavv.onmouseover=function insidernaveee(){

if(insidernavv.style.display="block"){
  insidernavv.style.display="block"
}


}

insidernavv.onmouseout=function insidernaveeeeee(){

if(insidernavv.style.display="block"){
  insidernavv.style.display="none"
} 

}







