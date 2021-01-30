$(".ursename").html("您好，" + sessionStorage.getItem("phonenumber"));
/* if($(".ursename").html()){
document.querySelectorAll(".leftul li")[0].style.display = "none";
document.querySelectorAll(".leftul li")[1].style.display = "none";
document.querySelectorAll(".leftul li")[2].style.display = "block";}
else{
    $(".ursename").html("考拉欢迎你！")
} */
//轮播
let imglist = document.querySelectorAll(".lunimg li")
var n = 0;
function arise(a) {
    for (let i = 0; i < imglist.length; i++) {
        imglist[i].className = "";
        circle[i].className = "";
    }
    imglist[a].className = "show";
    circle[a].className = "dian";
}
$(".left").click(function () {
    if (n === 0) {
        n = imglist.length - 1;
    }
    else {
        n--;
    }
    arise(n)
})
$(".right").click(function () {
    if (n < imglist.length - 1) {
        n++
    }
    else {
        n = 0;
    }
    arise(n)
})
setInterval(function () {
    document.querySelector(".right").click()
}, 3000)
$(".lunbo-con").mouseenter(function () {
    $(".left").show();
    $(".right").show();
})
$(".lunbo-con").mouseleave(function () {
    $(".left").hide();
    $(".right").hide();
})
let circle = document.querySelectorAll(".circle li")
for (let j = 0; j < circle.length; j++) {
    circle[j].onclick = function () {
        arise(j)
    }
}
//顶部下拉菜单
let isEnter = false;
$(".phone-kaola").mouseenter(function () {
    $(".phone-erwema").show()
    isEnter = false;
})
$(".phone-erwema").mouseenter(function () {
    $(".phone-erwema").show();
    isEnter = true;
})
$(".phone-erwema").mouseleave(function () {
    $(".phone-erwema").hide()
})
$(".phone-kaola").mouseleave(function () {
    if (!isEnter) { $(".phone-erwema").hide() }
})
$(".geren").mouseenter(function () {
    $(".geren1").show();
})
$(".geren").mouseleave(function () {
    $(".geren1").hide();
})
$(".kefu").mouseenter(function () {
    $(".kefu1").show();
})
$(".kefu").mouseleave(function () {
    $(".kefu1").hide();
})
$(".chongzhi").mouseenter(function () {
    $(".chongzhi1").show();
})
$(".chongzhi").mouseleave(function () {
    $(".chongzhi1").hide();
})
$(".xiao").mouseenter(function () {
    $(".xiao1").show();
})
$(".xiao").mouseleave(function () {
    $(".xiao1").hide();
})
$(".xiao").mouseenter(function () {
    $(".xiao1").show();
})
$(".more").mouseenter(function () {
    $(".more1").show();
})
$(".more").mouseleave(function () {
    $(".more1").hide();
})


//轮播左侧列表详情
let lunlist = document.querySelectorAll(".list li");

for (let i = 0; i < lunlist.length; i++) {
    lunlist[i].onmouseenter = function () {
        $(".details1").show();

    }
    /* lunlist[i].onmouseleave = function(){
        $(".details1").hide();
        
    } */
    $(".details1").mouseleave(function () {
        $(".details1").show();

    })
    $(".details1").mouseleave(function () {
        $(".details1").hide();

    })
}
//轮播右侧轮播
let spocir = document.querySelectorAll(".sport-circle li");
let rightlunbo = document.querySelectorAll(".sport-rightbox>div");

function fn(b) {
    for (let i = 0; i < rightlunbo.length; i++) {
        rightlunbo[i].className = "";
        spocir[i].className = "";
    }
    rightlunbo[b].className = "rightboxshow";
    spocir[b].className = "sportshow";
}

for (let j = 0; j < spocir.length; j++) {
    spocir[j].onclick = function () {
        fn(j)
    }
    
}
let p = 0;
setInterval(function () {
    if(p<=spocir.length){
        p++;
        if(p === 3){
            p=-1;
            return;
        }
    }
 /*  else{
      p = 0;
  } */
  spocir[p].click()
}, 3000)

//热门品牌轮播图
let plunboimg = document.querySelectorAll(".pinpai-plunbo li");
let m = 0;
function fn1(c) {
    for (let i = 0; i < plunboimg.length; i++) {
        plunboimg[i].className = "";
    }
    plunboimg[c].className = "plunbo-box";
}

$(".p-left").click(function () {
    if (m === 0) {
        m = plunboimg.length - 1;
    }
    else {
        m--;
    }
    fn1(m)
})
$(".p-right").click(function () {
    if (m < plunboimg.length - 1) {
        m++
    }
    else {
        m = 0;
    }
    fn1(m)
})
setInterval(function () {
    document.querySelector(".p-right").click();
}, 3000)

$(".entershopcar").click(function(){
    location.href = "http://127.0.0.1/kaola/shopcar.html"
})

//左侧轮播盒子点击事件
$(".sport-rightbox div div").click(function(){
    sessionStorage.setItem("img",this.children[0].src)
    location.href = "http://127.0.0.1/kaola/details.html"
    console.log(this.children[0].src)
})



