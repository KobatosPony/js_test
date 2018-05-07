// 页面完成后只需
window.onload = function(){
    loadData(pokemon);
}

/**
 * 加载数据
 * @param data {Array} 所需的数据源
 */

 function loadData(data){
     // 清空数据
    document.getElementsByTagName('tbody')[0].innerHTML = '';

     // 获取数据长度
     var dataLeng = data.length;

     // 获得tbody
     var tbody = document.getElementsByTagName('tbody')[0];

     // 开始向表格载入数据
     // ES6的写法
     for(var i = 0; i < dataLeng; i++){
        // 高可复用性的写法
        tbody.innerHTML += '<tr></tr>'

        var trArr = document.getElementsByTagName('tr')
        var trLeng = trArr.length;
        var lastTr = trArr[trLeng-1]


        lastTr.innerHTML += '<td><input type="checkbox" name="check-list" onclick="updateStatus()"></td>'
        // 遍历出单元格
        for(var x in data[i]){
            lastTr.innerHTML += '<td>'+data[i][x] + '</td>';
        }

        lastTr.innerHTML += '<td><button type="button" class="delete" onclick="deleteItem(this)">删除</button></td>'
     };
 }

//  多选数据
function allSelect(){
    var totalTag = document.getElementById("all-check");
    var listTag = document.getElementsByName("check-list");

    if(totalTag.checked){
        for(var i = 0;i < listTag.length;i++){
            listTag[i].checked = true;
        }
    }
    else{
        for(var i = 0;i < listTag.length;i++){
            listTag[i].checked = false;
        }
    }
}

function updateStatus(){
    // 定义属性和flag
    flag = true;
    var totalTag = document.getElementById("all-check");
    var listTag = document.getElementsByName("check-list");
    totalTag.indeterminate = false;

    // 如果没有数据则多选框设为不选择状态
    if(!listTag.length){
        totalTag.checked = false;
        return;
    }

    for(var i = 0;i < listTag.length;i++){
        if(!listTag[i].checked){
            totalTag.checked = false;
            flag = false;
        }
        else{
            totalTag.indeterminate = true;
        }
    }
    if(flag){
        totalTag.checked = true;
        totalTag.indeterminate = false;
    }
}

// 删除数据
function deleteItem(index){
    if(confirm("是否删除!")){
        index.parentNode.parentNode.remove();
        updateStatus();
    }
}

// 删除所选
function deleteSelect(){
    if(confirm("是否删除所选！")){
        var totalTag = document.getElementById("all-check");
        var listTag = document.getElementsByName("check-list");
        for(var i = listTag.length-1;i >= 0;i--){
            if(listTag[i].checked){
                listTag[i].parentNode.parentNode.remove();
            }
        }
       
        totalTag.checked = false;
        updateStatus();
    }
}

// 确认对话框
