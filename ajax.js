$("#add").click(()=>{
   const add_text=$("#itemField").val();
   const add_date=$("#userdate").val();
    $("#itemField").val("");
    $("#userdate").val(new Date());
    var usejson0=JSON.stringify(add_text);
    var usejson1=JSON.stringify(add_date);
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

});