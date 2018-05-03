// 页面完成后只需
window.onload = function(){
    loadData(pokemon);
}

/**
 * 加载数据
 * @param data {Array} 所需的数据源
 */

 function loadData(data){
     // 获取数据长度
     var dataLeng = data.length;

     // 获得tbody
     var tbody = document.getElementsByTagName('tbody')[0];

     // 开始向表格载入数据
     // ES6的写法
     for(var i = 0; i < dataLeng; i++){
        // tbody.innerHTML += `
        //     <tr>
        //         <td>${data[i].name}</td>
        //         <td>${data[i].series}</td>
        //         <td>${data[i].age}</td>
        //         <td>${data[i].gender}</td>
        //         <td>${data[i].skill}</td>
        //     </tr>
        // `;
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

        lastTr.innerHTML += '<td><span class="delete" onclick="deleteItem(this)">删除</span></td>'
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
    flag = true;
    var totalTag = document.getElementById("all-check");
    var listTag = document.getElementsByName("check-list");
    for(var i = 0;i < listTag.length;i++){
        if(!listTag[i].checked){
            totalTag.checked = false;
            flag = false;
        }
    }
    if(flag){
        totalTag.checked = true;
    }
}

// 删除数据
function deleteItem(index){
    index.parentNode.parentNode.remove();
}

// 删除所选
function deleteSelect(){
    // 定义删除的项索引列表
    var delete_arr = []
    var totalTag = document.getElementById("all-check");
    var listTag = document.getElementsByName("check-list");
    for(var i = 0;i < listTag.length;i++){
        if(listTag[i].checked){
            delete_arr.push(i)
        }
    }
    for(var j = 0;j < delete_arr.length;i++){
        listTag[delete_arr.pop()].parentNode.parentNode.remove();
    }

    totalTag.checked = false;
}