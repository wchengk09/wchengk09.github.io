function renderMd(DOM,src){
    var conv = new showdown.Converter();
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        DOM.innerHTML = conv.makeHtml(ajax.responseText);
        renderMathInElement(DOM, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: true},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError : false
        });
    }
    ajax.open('GET',src + '?t=' + Date.now());
    ajax.send();
}