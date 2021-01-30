/* document.querySelector(".phoneinput input").onclick = function(){
        document.querySelector(".phoneinput input").style.borderColor = "skyblue";
    } */
    document.querySelector(".mimadenglu").onclick = function(){
        document.querySelector(".logboxtop2").style.display = "none";
        document.querySelector(".logboxtop2-phone").style.display = "block";
        document.querySelector(".mimadenglu").innerHTML = "使用验证码登录";
    }
    //登录
    let phonenumber = $(".phonenumber input");
    let password = $(".password input");
    if (cookie.get("phonenumber")) {
        phonenumber.val(cookie.get("phonenumber"));
        password.val(cookie.get("password"));
    }
    $(".denglu").click(function(){
        cookie.write("phonenumber", phonenumber.val(), 30);
        cookie.write("password", password.val(), 30);
        let http = new XMLHttpRequest();
        http.open("get",`http://127.0.0.1:8080/log?phonenumber=${phonenumber.val()}&password=${password.val()}`);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState === 4){
                if(http.responseText === "success"){
                    sessionStorage.setItem("phonenumber",phonenumber.val())
                    console.log(phonenumber.val())
                   location.href = "http://127.0.0.1/kaola/index.html"
                }
                else{
                    alert("登录失败")
                }
            }
        } 
    })
    document.onkeydown = function (e) {
        if (e.keyCode === 13) {
          document.querySelector(".denglu").click()
        }
      }