var cOnTeXt = new AudioContext();
var oSC = null;
var gAIN = null;
var startedB = false;
function Sleep(ms){
    var stdt = new Date();
    var sttm = stdt.getTime();
   	while (1){
        var eddt = new Date();
        var edtm = eddt.getTime();
        if (edtm - sttm >= ms)break;
    }
}
function startB(frequency) {
    oSC = cOnTeXt.createOscillator();
    gAIN = cOnTeXt.createGain();
    oSC.type = "sine";
    oSC.connect(gAIN);
    oSC.frequency.value = frequency;
    gAIN.connect(cOnTeXt.destination);
    oSC.start(0);
    startedB = true;
}

function stopB(){
    if (!startedB)return;
    oSC.stop(0);
    startedB = false;
}

function Play(url){
    var voice = new Audio(url);
    voice.play();
}