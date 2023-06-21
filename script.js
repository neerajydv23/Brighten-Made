var sushant = document.querySelector("#sushant");
var for_designers = document.querySelector("#for-designers");

var flag = 0

sushant.addEventListener("click",function(){
    if(flag===0){
        for_designers.style.display="flex";
        flag=1;
    }
    else{
        for_designers.style.display="none";
        flag=0;
    }
});