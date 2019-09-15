$("#add").click(()=>{
   const add_text=$("#itemField").val();
   const add_date=$("#userdate").val();
    $("#itemField").val("");
    $("#userdate").val(new Date());
    alert(JSON.stringify(add_text));
    alert(JSON.stringify(add_date));
    if(add_date==""){
        alert("!날짜입력!");
        return false;
    }
    $.ajax({
        url:"/api/insert",
        data:{"text":add_text,"date":add_date},
        type:"POST",
        success : function(return_data){
            alert("success");
            },
        error : function(return_data){
            alert(return_data);
        }
    });

});

$("#list_search").click(()=>{
    const list_date=$("#itemsearch").val();
    $("#itemsearch").val(new Date());
    alert(JSON.stringify(list_date));
    $.ajax({
        url:"/api/list",
        data:{date:list_date},
        type:"POST",
        success : function(return_data){
            alert("success");
        },
        error : function(return_data){
            alert(return_data);
        }
    });
});
$("#close").click(()=>{
    const delete_item=$("#close").td_no;
    alert(JSON.stringify(delete_item));
    $.ajax({
        url:"/api/delete",
        data:{td_no:delete_item},
        type:"POST",
        success : function(return_data){
            alert("success");
        },
        error : function(return_data){
            alert(return_data);
        }
    });
});
