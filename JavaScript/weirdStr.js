function store()
{
    let element=document.getElementById('T').value;
    for(let i=0;i<element.length;i++){
        if(i%2==0){
            element[i].toUpperCase();
            console.write(element);
        }else{
            element[i].toLowerCase();
        }
    }
    console.write(element);
    alert(element);
}