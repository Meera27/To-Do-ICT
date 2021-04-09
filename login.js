// $("document").ready(function(){
//     var id = $("#userid").val();
//         var pwd =$("#exampleInputPassword1").val();
//         console.log(id);
//         console.log(pwd);
//     $("#submitme").click(function(){
//         if(pwd==''&&id==''){
//             alert("Fields cannot be empty");
//         }
//         else if(id==''){
//             alert("UserId cannot be empty");
//         }
//         else if(pwd==''){
//             alert("Passwordcannot be empty");
//         }
//         else if(id == 'admin'&& pwd == '12345'){
//             redirecting();
//         }
//         else{
//             alert("INVALID CREDENTIALS!!");
//         }
//     });
// });
// function redirecting(){
//     $("#newform").attr("action","index.html");
// }

var id = document.getElementById("userid");
var pwd= document.getElementById("exampleInputPassword1");
function check(redirecting){
    if(pwd.value==''&&id.value==''){
        alert("Fields cannot be empty");
        return false;
    }
    else if(id.value==''){
        alert("UserId cannot be empty");
        return false;
                }
    else if(pwd.value==''){
         alert("Password cannot be empty");
        return false
    }
    else if(id.value == 'admin'&& pwd.value == '12345'){
        redirecting();
        return true;
        }
    else{
        alert("Wrong Credentials")
        }
}
function redirecting(){
    var form = document.getElementById("newform");
    form.setAttribute("action","sp.html");
}

