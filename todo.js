$(document).ready(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
    var tasks='';
    $.each(data,function(key,value){
        tasks+="<tr>";
        tasks+="<td>"+value.userId+"</td>";
        tasks+="<td>"+value.id+"</td>";
        tasks+="<td>"+value.title+"</td>";
        tasks+='<td><input type="checkbox" class="check" /></td>';
        // var cbox=document.getElementsByClassName("check");
        if(value.completed==false){
            // cbox.setAttribute("name","cbox1");
            $(".check").attr("name","cbox1");
             
        }
        else{
            // $(".check").attr("name","cbox2");
            $('input[type="checkbox"]').attr("checked","checked");
            // $(".check").attr('checked',true);
        }
        tasks+="</tr>";
    })
    $("#tasks").append(tasks);
    });
});






















































