function getnowdate(){
    let accessdat=document.getElementById("date"); //dat→date and time,scam.phpからid:dateを取得
    var today=new Date();//PCから日時を取得
    var year=today.getFullYear(); //年の値を格納
    var month=today.getMonth()+1; //月の値を格納(0からスタートしているため1を足している)
    var date=today.getDate(); //月の値を格納
    var day=today.getDay(); //日の値を格納
    var hour=today.getHours(); //日の値を格納
    var minute=today.getMinutes(); //分の値を格納
    var second=today.getMinutes(); //病の値を格納
    var daystr=[ "日", "月", "火", "水", "木", "金", "土" ][day] ; //曜日を格納
    accessdat.innerHTML=year+"年"+month+"月"+date+"日"+daystr+"曜日"+hour+"時"+minute+"分"+second+"秒"; //scam.phpに文字列を送信
}

function getbrowser(){
    let browser=document.getElementById("browser");//scam.phpからid:browserを取得
    let ua = window.navigator.userAgent;//使用しているブラウザのエージェント情報を取得
    browser.innerHTML=ua;//scam.phpに文字列を送信
}

function getipaddr(){
    fetch("https://ipinfo.io?callback")
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').innerText = `Your IP Address: ${data.ip}`;
        })
        .catch(error => console.error('Error fetching IP:', error));
}


window.onload=function(){
    //MoveCheck();
    window.alert("登録完了しました");//ポップアップを表示
    getnowdate(); //時間を取得
    getbrowser(); //ブラウザ情報を取得
    getipaddr(); //IPアドレスを取得
}

function paying(){
    window.location="paying.html" //paying.htmlを開く
}