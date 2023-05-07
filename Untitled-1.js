
// function add(paramster1 , paramseter2,paramseter3,paramseter4) {
//     return paramster1 + paramseter2+paramseter3+paramseter4;
// };
// function add2(...parameter) {
//     let total = 0
//     parameter.forEach(num=>{
//          total += num 
//     });
//     return total;


// الحصول على data
// var numper = document.getElementById("numper");
// var email = document.getElementById("email");
// var nome = document.getElementById("nome");
// var butt = document.getElementById("butt");
// var arr= [];
// butt.addEventListener("click" , (params) => {
//     var use =  {
//         uname:nome.value ,
//         uemail:email.value,
//         unome:nome.value
//     };
//       arr.push(use);
//       console.log(use);
// });


const affshe = document.getElementById("screen");


function disply(x){
    affshe.value += x 
}
function delet(){
    affshe.value = "";
}


function calcul(){
    affshe.value = eval(affshe.value);eval()
}








 

