var DOMs = document.querySelectorAll('md');
var conv = new showdown.Converter();
for (var i = 0;i < DOMs.length;i ++)
    DOMs[i].innerHTML = conv.makeHtml(DOMs[i].innerHTML);
renderMathInElement(document.getElementById("display"), {
        delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: true},
        {left: '\\(', right: '\\)', display: true},
        {left: '\\[', right: '\\]', display: true}
        ],
        // • rendering keys, e.g.:
        throwOnError : false