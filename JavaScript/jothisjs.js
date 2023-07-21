var email=document.getElementById('email');
var firstname=document.getElementById('firstname');

var lastname=document.getElementById('lastname');
var password=document.getElementById('password');
var English=document.getElementById('English');
var Tamil=document.getElementById('Tamil');
var Other=document.getElementById('Other');
var gender=document.getElementById('gender');
var password1=document.getElementById('password1');
var email1=document.getElementById('email1');

var f=firstname.value;
var l=lastname.value;
var e=email.value;
var p=password.value;
let arr = new Array();
let x=0;
let result = [];
var checkBoxes = document.getElementById('itemForm').querySelectorAll('input[type="checkbox"]');

function register()
{
   /* if(f.length>3)
    {
     //sdasd
    }
    else{
        alert('fill first name > 3');
    }
    if(l.length>2)
    {
    //sada
    }
    else{
        alert('fill last  name > 2');
    }*/
    checkBoxes.forEach(item => { 
    if (item.checked) {  //if the check box is checked
        let data = {    // create an object
            item: item.value,
            selected: item.checked
        }
        result.push(data); 
        console.log(data);
    }
   
})
    if(((f.length>3)&&(l.length>2)))
    {
        const obj={
        fN:firstname.value,
        ln:lastname.value,
        em:email.value,
        pa:password.value,
        gen:gender.value,
        lang:result
       
       
       
    }
    arr.push(obj);
    console.log(obj);
}
   
    console.log(arr);
   // arr[x]=obj;
    //x++;
   // console.log();

 
/*    arr.forEach(myFunction);
    function myFunction(value) {
     console.log(value);
      } 
      */
    
}
function login()
{
    arr.forEach(element =>{
        console.log(element.em);
        console.log(element.pa);
        if((element.em==email1.value)&&(element.pa==password1.value))
        {
            alert("LOGIn");
        }
        else
        {
            alert("SIGN IN");
        }
    });
 


 /*
{
    alert("Login successfully");
}
else
{
    alert("signup 1st");
}
*/
}
function clear()
{
    document.getElementById('email').value=null;
    lastname.value=null;
    email.value=null;
    password.value=null;
}