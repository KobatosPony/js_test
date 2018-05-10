// 页面载入完成后执行
$(function() {
    // 加载指定数据
    loadBookData('http://aulence.com/data/book-info.json');
    // 筛选并加载数据
    filterBookData('http://aulence.com/data/book-info.json');
});

/**
 * 加载数据
 * @param url { String } 图书信息的数据接口地址
 */
function loadBookData(url) {
    $.getJSON(url, function(res) {
        var $bookData = $('.book-data');
        res.forEach(function(ele,index) {
            // 为tbody载入数据并生成页面元素
            $bookData.append(`
                <tr>
                    <td>BOOK-${index + 1}</td>
                    <td title="${ele.name}">
                        <div class="book-name">${ele.name}</div>
                    </td>
                    <td>
                        <img src="${ele.cover}" alt="加载失败" title="${ele.name}">
                    </td>
                    <td title="${ele.describe}">
                        <div class="describe">${ele.describe}</div>
                    </td>
                    <td title="${ele.author}">
                        <div class="author">${ele.author}</div>
                    </td>
                    <td>￥${ele.price.toFixed(2)}</td>
                </tr>
            `);
        });
    });
}

/**
 * 筛选并加载数据
 * @param url { String } 图书信息的数据接口地址
 */
function filterBookData(url) {
    $('.btnFilterData').on('click', function() {
        $.get(url, function(res) {
            // 获取书名筛选项
            keywords = $('.filter-book>li').eq(0).children('.is_used').text()
            if(keywords != ""){
                res = res.filter(function(obj) {
                    return new RegExp(keywords, 'i').test(obj.name);
                });
            }
            // 获取作者筛选项
            author_f = $('.filter-book>li').eq(1).children('.is_used').text()
            if(author_f != ""){
                res = res.filter(function(obj) {
                    return new RegExp(author_f, 'i').test(obj.author);
                });
            }
            // 获取价格筛选项
            price_f = $('.filter-book>li').eq(2).children('.is_used').index()
            
            switch(price_f)
            {
            case 1:
                res = res.filter(function(obj) {
                    return obj.price<40?true:false;
                });
                break;
            case 2:
                res = res.filter(function(obj) {
                    return (obj.price>=40&&obj.price<70)?true:false;
                });
                break
            case 3:
                res = res.filter(function(obj) {
                    return (obj.price>=70&&obj.price<100)?true:false;
                });
                break;
            case 4:
                res = res.filter(function(obj) {
                    return obj.price>=100?true:false;
                });
                break;
            default:
            break
            }

            var $bookData = $('.book-data');
            $bookData.html("")
            res.forEach(function(ele,index) {
                // 为tbody载入数据并生成页面元素
                $bookData.append(`
                    <tr>
                        <td>BOOK-${index + 1}</td>
                        <td title="${ele.name}">
                            <div class="book-name">${ele.name}</div>
                        </td>
                        <td>
                            <img src="${ele.cover}" alt="加载失败" title="${ele.name}">
                        </td>
                        <td title="${ele.describe}">
                            <div class="describe">${ele.describe}</div>
                        </td>
                        <td title="${ele.author}">
                            <div class="author">${ele.author}</div>
                        </td>
                        <td>￥${ele.price.toFixed(2)}</td>
                    </tr>
                `);
            });
        })
    });
}