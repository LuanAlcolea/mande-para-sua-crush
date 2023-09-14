function changepos()
{
    var i = Math.floor(Math.random()*700)+1;
    var j = Math.floor(Math.random()*300)+1;
    document.getElementById("nobtnID").style.top=j+'px';
    document.getElementById("nobtnID").style.left=i+'px';
};