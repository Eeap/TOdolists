
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
$(function() {
    let $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');

    $newItemForm.on('button', function(e) {
        e.preventDefault();
        let text = $("input:text").val();
        $list.append(`<li>${text}<span id='close' onClick="this.parentNode.style.display = 'none';">&times;</span></li>`);

        $('input:text').val('');
    });

    $list.on('delete', 'li', function() {//delete 버튼으로 삭제 기능 구현 필요
        let $this = $(this);
        $this.remove();
    });

});
