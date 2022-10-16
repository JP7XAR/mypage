function question(){
    let result=document.getElementById("result");
    let celebrate=document.getElementById("celebrate");
    let omikuji = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
    let r = Math.floor( Math.random() * omikuji.length) ;
    let celesound= new Audio("celebrate.mp3")
    console.log(r);
    result.innerHTML=omikuji[r];
    celebrate.innerHTML="";
    if(r==0){
        celesound.play();
        celebrate.innerHTML="大吉です！！！おめでとうございます！！！！";
    }
}