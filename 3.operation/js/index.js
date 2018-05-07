// 页面完成后只需
window.onload = function(){
    loadData(pokemon);
    allChecked('all-check');
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
        tbody.innerHTML += '<tr></tr>'

        var trArr = document.getElementsByTagName('tr')
        var trLeng = trArr.length;
        var lastTr = trArr[trLeng-1]


        // 加入多选按钮
        lastTr.innerHTML += '<td><input type="checkbox" name="check-list"></td>'
        // 遍历出单元格
        for(var x in data[i]){
            lastTr.innerHTML += '<td>'+data[i][x] + '</td>';
        }

        lastTr.innerHTML += '<td><button type="button" class="delete" ">删除</span></td>'
       
        var delBtnGroup = document.getElementsByClassName("delete"),
            delBtnGroup_length = delBtnGroup.length;

        // 循环绑定事件
        for(var j = 0; j<delBtnGroup_length;j++){
            delBtnGroup[j].onclick = function(){
                // 找最近的tr标签
                this.closest('tr').remove();
            }
        }
     };
 }

 /**
  * 全选/取消全选
  * @param ident {String} 多选框的ID
  * 
  */
 function allChecked(ident){
     // 全选按钮
     var allCkd = document.getElementById(ident);
     // 多选按钮
     var tobdyCkb = document.getElementsByName('check-list'),
         tobdyCkb_Len = tobdyCkb.length;
     allCkd.onchange = function(){
        if(this.checked){
            for(var i=0;i<tobdyCkb_Len;i++){
                tobdyCkb[i].checked = true;
            }
        }
        else{
            for(var i=0;i<tobdyCkb_Len;i++){
                tobdyCkb[i].checked = false;
            }
        }
     }
 }


