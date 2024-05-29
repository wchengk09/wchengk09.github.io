// calculate in the backend
var a = 1n,b = 5n;
function calc(){
    a = (a + b / a) / 2n;
    a *= 10n;
    b *= 100n;
}
setInterval(calc,0);

this.addEventListener('message',function(e){
    // console.log('114');
    this.postMessage(a);
})