(function(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            var lockstr = ajax.responseText;
            var loc = getLoc();
            if (lockstr != "" && getLoc() != lockstr)
                location.href = lockstr;
        }
    }
    ajax.open("GET","/14/control/lock_conf?t=" + Math.random() + "" + Math.random());
    ajax.send();
})();

window.addEventListener('load',function(){
    var bar = document.querySelector("ers_bar");
    if (!bar)return;
    bar.style.width = "100vw";
    bar.style.margin = "0";
    bar.style.padding = "0";
    bar.innerHTML = 
    "<ers_div style=\"padding: 20px; background-color: #f8f9fa\">" + 
        "<span id=\"bjsdfz17ban\" class=\"ft20\" style=\"margin-left: 10px;\"></span>" +
        "<ers_div class=\"inl\" style=\"max-width: calc(100vw - 105px); float: right;\">" +
            "<a href=\"/inf\" class=\"text under\">首页</a>&emsp;" +
            "<a target=\"_blank\" href=\"/login?prev=/inf\" class=\"text under\">帐号管理</a>&emsp;" +
            "<ers_div class=\"rad10 bor1 inl\">" +
                "<input id=\"ers_in1\" class=\"inl rad10\" style=\"border: none; outline: none; font-size: 15px; height: 20px; width: 150px;\" placeholder=\"搜索...\">" +
                "<ers_div onclick=\"ers_onSearch()\" class=\"inl\" style=\"background-image: url('https://kevinwu521.gitee.io/res/search.jpeg'); background-size: 100% 100%; width: 15px; height: 15px;\"></ers_div>" +
            "</ers_div>" +
        "</ers_div>" +
    "</ers_div>";
});

var swd = getCookie("swd") || getParam("swd");
var read = getCookie("read") || getParam("read");
var strict = getCookie("strict") || getParam("strict");

function ers_checkKey(e){
    e = e || window.event;
    if (e.keyCode == 13 && getObj("ers_in1") == document.activeElement)
        ers_onSearch();
}

function ers_onSearch(){
    var val = getObj("ers_in1").value;
    location.href = "/14/?swd=" + val + "&read=" + read;
}

function ers_checkSz(){
    var width = document.body.clientWidth;
    if (width < 495)
        getObj("bjsdfz17ban").innerHTML = "";
    else
        getObj("bjsdfz17ban").innerHTML = "因福梅森官网";
    /*
    if (width < 470)
        getObj("banhui2").style.display = "none";
    else
        getObj("banhui2").style.display = "inline-block";
    */
}
window.addEventListener('load',function(){
    getObj("ers_in1").value = decodeURI(swd);
    getObj("ers_in1").disabled = read;
    if (getLoc().split('?')[0] == '/')
        getObj("ers_in1").focus();
    document.addEventListener('keyup',ers_checkKey);
    window.addEventListener('resize',ers_checkSz);
    ers_checkSz();
});