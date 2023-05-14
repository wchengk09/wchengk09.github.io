var DOMs = document.querySelectorAll('md');
var conv = new showdown.Converter();
for (var i = 0;i < DOMs.length;i ++)
    DOMs[i].innerHTML = conv.makeHtml(DOMs[i].innerHTML);
renderMathInElement(document.body, {
    delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: true},
        {left: '\\[', right: '\\]', display: true}
    ],
    throwOnError : false
});
function renderMd(DOM,src){
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
    DOM.innerHTML = conv.makeHtml(DOM.innerHTML);
    renderMathInElement(document.body, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: true},
            {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError : false
    });
}