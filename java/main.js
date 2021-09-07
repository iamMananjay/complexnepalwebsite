flag=0
function btnc(b){
    flag=flag+b;
    slider(flag);

}
function slider (a){
    let x = document.getElementsByClassName('containerbody');
    if(a==x.length){
        flag=0;
        a=0;

    }
    else if(a<0){
        flag=x.length-1;
        a=x.length-1;
    }
    for (let c of x){
        c.style.display="none";
    }
    x[a].style.display="block";
    x[a].style.display="grid";
    x[a].style.grid-template-columns == 50% auto;
    x[a].style.padding = "0 4em" ;


}
slider(flag);


