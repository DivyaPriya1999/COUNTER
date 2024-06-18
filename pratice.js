const count = document.getElementById("count");

function increase(){
    let num ;
    num = count.textContent;
    num = Number(num)
    num++
    count.textContent=num
}

function reset(){
    
    num=0;
    count.textContent=num
}
function decrease(){
    num--
    count.textContent=num
}