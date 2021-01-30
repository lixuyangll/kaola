let phonenumber = $(".phoneinput input");
let password = $(".password input");
$(".registered").click(function(){
    let http = new XMLHttpRequest();
    http.open("get",`http://127.0.0.1:8080/reg?phonenumber=${phonenumber.val()}&password=${password.val()}`);
    http.send();
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.responseText === "success"){
                alert("注册成功")
                location.href = "http://127.0.0.1/kaola/index.html"
            }
            else{
                alert("手机号重复，请重新输入")
            }
        }
    }
})