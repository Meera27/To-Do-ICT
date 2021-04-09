$(document).ready(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
    var tasks='';
    $.each(data,function(key,value){
        tasks+="<tr>";
        tasks+="<td>"+value.userId+"</td>";
        tasks+="<td>"+value.id+"</td>";
        tasks+="<td>"+value.title+"</td>";
        if(value.completed==false){
            tasks+='<td><input type="checkbox" class="check1" name="cbox1" /></td>';   
              
        }
        else{
            tasks+='<td><input type="checkbox" checked disabled /></td>'; 
        }
        tasks+="</tr>";
    })
    $("#tasks").append(tasks);
    $("input").click(function(){
        var promise  = new Promise(function(resolve,reject){
            var count= $("input[class='check1']:checked").length;
            if(count == 5){
                resolve();
            }
            else{
                reject();
            }
        });
        promise
        .then(function(){
            $(".check1").prop('disabled',true);
            $(".check1:checked").removeAttr('disabled','disabled');
            setTimeout(function(){
                alert("Congrats. 5 Tasks have been Successfully Completed");
            },100)
             
        })
        .catch(function(){
            $('.check1').removeAttr('disabled','disabled');
        });

    });
    });
});






















































