//获取数据库信息

$.ajax({
    url: "http://127.0.0.1:8080/kaolauser",
    success(data) {
        data.forEach(element => {
            let newitem = $(".goods").clone(true).attr("class", "goodsclone");
            newitem.appendTo($(".mycar"));
            newitem.find($(".shopxinxi")).html(element.goodsDesc);
            
            newitem.find($(".goods3")).html(element.goodsPrice);
            newitem.find($(".shuliangwrap")).val(element.goodsCount);
            let aa = element.goodsPrice;
            let bb = element.goodsCount;
            newitem.find($(".goods5")).html(aa * bb);
            
let a = document.querySelector(".goodsclone .goods3");

let b = document.querySelector(".goodsclone .goods5");

let shuliangwrap = document.querySelector(".goodsclone .shuliangwrap");
$(".goodsclone .countjian").click(function(){
    if(parseInt(shuliangwrap.value) > 1){
    shuliangwrap.value = parseInt(shuliangwrap.value) - 1;
    b.innerHTML = parseInt(a.innerHTML) * parseInt(shuliangwrap.value);
    }
})
$(".goodsclone .addcount").click(function(){
    shuliangwrap.value = parseInt(shuliangwrap.value) + 1;
    b.innerHTML = parseInt(a.innerHTML) * parseInt(shuliangwrap.value);
})
        });
    }
})

//删除
$(".goods6").click(function () {
    let goodsDesc = $(this).closest(".mycar").find(".shopxinxi").html();
    console.log($(this).closest(".mycar").find(".shopxinxi").html())
    let http = new XMLHttpRequest();
    http.open("get", `http://127.0.0.1:8080/delete?goodsDesc=${$(".shopxinxi").html()}`);
    console.log($(".shopxinxi").html())
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            if (http.responseText === "success") {
                history.go(0)
            }
        }
    }
})




