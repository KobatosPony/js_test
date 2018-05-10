$('#MyList>li').on('click',listChecked);

function listChecked(){
    $(this).addClass('checked').siblings().removeClass('checked');
}