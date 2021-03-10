var f = ['📞','📩','📫'];

function loop() {
    location.hash = f[Math.floor((Date.now()/100)%f.length)];
    setTimeout(loop, 450);
}
loop(); 

