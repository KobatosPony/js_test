var btnTotal = document.getElementById('btnTotal');


// 开始计算总价
btnTotal.onclick = function(){
    var getPrice = totalPrice.unitPrice.value,
        getCount = totalPrice.count.value,
        getTotal = getPrice * getCount;

    parseFloat
    // 转换为数字
    getPrice = Number(getPrice);
    getCount = Number(getCount);

    // 判断价格是否为数字
    if(isNaN(getPrice)){
        alert('输入的内容只能是数字！');
        totalPrice.unitPrice.value = 0;
        return;
    }

    if(isNaN(getPrice)){
        alert('输入的内容只能是数字！');
        totalPrice.count.value = 0;
        return;
    }

    var total = document.getElementById('total');
    total.textContent = '￥' + getTotal;

    console.log('￥' + getTotal);
}