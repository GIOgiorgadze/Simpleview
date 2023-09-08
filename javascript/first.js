function changeImage(){ 
   var element = document.getElementsByClassName("unit");
   var helper = [16,17,18,19,20,21]
   var count =[];
   for(var x =0;x<element.length;x++){
       var randomS = (Math.floor(Math.random()*15)+1);
       if(count.includes(randomS)){
        element[x].style.backgroundImage = "url('images/scooby\ "+[helper[x]]+".jpg')";
       }else{
        element[x].style.backgroundImage="url('images/scooby\ "+[randomS]+".jpg')";
        count.push(randomS);
       } 
   }
}
setInterval(changeImage,6000);

const represent = document.getElementById("monthYear");
let date =  new Date();

represent.innerHTML = date.toDateString();