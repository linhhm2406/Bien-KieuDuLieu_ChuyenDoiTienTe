function convert() {
    let amount=parseInt(document.getElementById("amount").value);
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    let fromvalue;
    let tovalue;
    if(from=='Vietnam'){
        fromvalue=1;}
    else if (from=='USD'){
        fromvalue=23000;}
    else if (from=='SNG'){
        fromvalue=17000;}
    else {fromvalue=3500;}

    if(to=='Vietnam'){
        tovalue=1;}
    else if (to=='USD'){
        parseInt(tovalue=23000);}
    else if (to=='SNG'){
        tovalue=17000;}
    else {tovalue=3500;}

    let ketqua=amount*fromvalue/tovalue;

    document.getElementById("result").innerHTML = ketqua;
    document.getElementById("result-country").innerHTML = to;
}