var one = document.querySelector("#txt");
var btn = document.querySelectorAll("button");
var count=one.innerHTML;

function cal() {
 count++;
 
 console.log(count);
 one.innerHTML=count;
}



btn.onclick="cal"