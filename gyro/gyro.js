function getgyro(){
    let gyro=document.getElementById("gyro");
    
    window.addEventListener('devicemotion', function(e) {
        var str = '',
            x   = e.acceleration.x,
            y   = e.acceleration.y,
            z   = e.acceleration.z;
    
        str  = 'x = ' + x + '\n';
        str += 'y = ' + y + '\n';
        str += 'z = ' + z + '\n';
    
        alert(str);
    }, false);
    gyro.innerHTML="ssss"
}

window.onload=function(){
    getgyro()
}