function myForm(){
   
 

let name = document.getElementById("Nam").value;
// let LastName = document.getElementById("lastname").value;
let Email = document.getElementById("Email").value;
let Pnum = document.getElementById("num").value;
let BirthDate = document.getElementById("birth").value;
let App_Time = document.getElementById("time").value;
let favcolor = document.getElementById("color").value;
let Pyement = document.getElementsByName("pye").value;
// let Age = document.getElementById("age").value;



let Name =localStorage.setItem("name",name);
// let lastname = localStorage.setItem("LastName",LastName);
let email = localStorage.setItem("Email",Email);
let phonenumber = localStorage.setItem("Pnum",Pnum);
let birthdate = localStorage.setItem("BirthDate",BirthDate);
let app_time = localStorage.setItem("App_Time",App_Time);
let favColor = localStorage.setItem("favcolor",favcolor);
let payment= localStorage.setItem("Pyement",Pyement);
// let age = localStorage.setItem("Age",Age);

}
