$(function () {

    function gotoTop(min_height) {

        var gotoTop_html = '<div id="gotoTop">返回顶部</div>';

        $("#page").append(gotoTop_html);
        $("#gotoTop").click(
            function () {
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            }).hover(
            function () {
                $(this).addClass("hover");
            },
            function () {
                $(this).removeClass("hover");
            });

        min_height ? min_height = min_height : min_height = 600;

        $(window).scroll(function () {

            var s = $(window).scrollTop();

            if (s > min_height) {
                $("#gotoTop").fadeIn(100);
            } else {
                $("#gotoTop").fadeOut(200);
            };
        });
    };
    gotoTop();



    var btnT = document.getElementById("btnT");
    var btnB = document.getElementById("btnB");
    var oCon = document.getElementById("container");
    var oUl = document.getElementById("bb");
    var speed = -1;
    var timer = null;
    var username = $("#username").val();

    function autoPlay(obj) {
        if (obj == btnT) {
            speed = -1;
        } else {
            speed = 1;
        }
        timer = setInterval(function () {
            oUl.style.top = oUl.offsetTop + speed + "px";
            if (oUl.offsetTop <= oCon.offsetHeight - oUl.offsetHeight && speed < 0 || oUl.offsetTop >= 0 && speed > 0) {
                clearInterval(timer);
            }
        }, 4)
    }
    btnB.onmouseover = function () {
        if (oUl.offsetTop > oCon.offsetHeight - oUl.offsetHeight) {
            clearInterval(timer);
            setTimeout(autoPlay(btnT));
        }
    }
    btnB.onmouseout = function () {
        clearInterval(timer);
    }
    btnT.onmouseover = function () {
        if (oUl.offsetTop < 0) {
            clearInterval(timer);
            setTimeout(autoPlay(btnB));
        }
    }
    btnT.onmouseout = function () {
        clearInterval(timer);
    }


    document.getElementById("btn_showlogin").onclick = shogMinLogin;
    document.getElementById("close_minilogin").onclick = closeLogin;
    document.getElementById("firstLine").onmousedown = moveLogin;

    function shogMinLogin() {
        var mini_login = document.getElementsByClassName("mini_login")[0];
        var cover = document.getElementsByClassName("cover")[0];
        mini_login.style.opacity = "1";
        mini_login.style.width = "321px";
        mini_login.style.height = "203px";
        cover.style.display = "block";

        mini_login.style.left = (document.body.scrollWidth - mini_login.scrollWidth) / 2 + "px";
        mini_login.style.top = 300 + "px";
    }


    function closeLogin() {
        var mini_login = document.getElementsByClassName("mini_login")[0];
        var cover = document.getElementsByClassName("cover")[0];
        
        
        mini_login.style.width = "0px";
        mini_login.style.height = "0px";
        mini_login.style.opacity = "0";
        cover.style.display = "none";
    }



    function moveLogin(event) {
        var moveable = true;


        event = event ? event : window.event;
        var clientX = event.clientX;
        var clientY = event.clientY;

        var mini_login = document.getElementById("mini_login");

        var top = parseInt(mini_login.style.top);
        var left = parseInt(mini_login.style.left);
        document.onmousemove = function (event) {
            if (moveable) {
                event = event ? event : window.event;
                var y = top + event.clientY - clientY;
                var x = left + event.clientX - clientX;
                if (x > 0 && y > 0) {
                    mini_login.style.top = y + "px";
                    mini_login.style.left = x + "px";
                }
            }
        }

        document.onmouseup = function () {
            moveable = false;
        }
    }
    $("#zhux").click(function () {
        $("#btn_showlogin").text();
        $("#btn_showlogin").html('<i class="iconfont icon-Lemenu_material_dengru_white_xpx"></i>' + 'LOG IN');
        $("#zhux").css("display", "none");
        username = '';
        $("#username").val('');
        $("#password").val('');
        window.location.reload();
    })
    $("#ddengru").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajax({
            url: "http://111.231.120.147/login",
            type: 'post',
            timeout: 1000,
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            },
            success: function (data) {
                alert(data.msg)
                if (data.status == 50001) {
                    $("#btn_showlogin").text();
                    $("#btn_showlogin").html('<i class="iconfont icon-Lemenu_material_dengru_white_xpx"></i>' + username);
                    $("#btn_showlogin").css("color", "#e74f4d");
                    $("#btn_showlogin").css("font-size", "25px");

                    closeLogin();
                    $("#zhux").css("display", "block");

                }
            },
            fail: function (err, status) {
                alert(result['msg'])
            },
            function (STATUS) {
                var a = JSON.stringify(STATUS)
                var result = $.parseJSON(a);
                alert(result['msg'])
            }

        })
    })

    

    

    var arrSpan = ["01", "02", "03", "04"];
    var arrH2 = ["圣 诞 袜", "圣 诞 卡", "圣 诞 树", "圣 诞 老 人"];
    var arrP = ["圣诞袜（Christmas stocking），英国少年儿童在圣诞前夕把长统袜子放" +
        "在壁炉旁，相信圣诞老人在夜里会从大烟囱下来，给他" +
        "们带来满袜子的礼物。法国的少年儿童把鞋放在门口，" +
        "让“圣婴来时把礼物放在鞋里面。”", "圣诞卡（Chris" +
        "tmas Card）是节日赠品，表达自己对别人的良好祝愿" +
        "。圣诞卡一般为纸质，印刷精美，可在上面题写祝福语" +
        "。随着科技的进步，发展出电子贺卡，通过网络传递。",
        "圣诞树（Christmas tree），是指用灯烛和装饰品把枞树或洋松装点起来的常" +
        "青树。作为是圣诞节重要的组成元素之一，近代圣诞树起" +
        "源于德国，后来逐步在世界范围内流行起来，成为圣诞节" +
        "庆祝中最有名的传统之一。", "圣诞老人（Santa Claus）" +
        "，一位专门在圣诞节前夜时悄悄赠送礼物给小孩子的神秘人" +
        "物，是节日主题的代表角色之一。他普遍被认为是基督教的" +
        "圣人圣·尼古拉斯（Saint Nicholas）的衍生形象。"
    ];
    var arrUrl = ["url(img/wazi.jpg)", "url(img/？？？.jpg)",
        "url(img/sdshu.jpg)", "url(img/laoren.jpg)"
    ];
    var num = 0;
    $(".ziji").click(function () {
        $(".suoy").css("display", "none");
        $("#zjzj").css("display", "block");

    })
    $(".bieren").click(function () {
        $(".suoy").css("display", "block");
        $("#zjzj").css("display", "none");

    })
    $(".xiangshang").mouseenter(function () {
        $(".xiangshang").css("opacity", "1");
    })
    $(".xiangxia").mouseenter(function () {
        $(".xiangxia").css("opacity", "1");
    })
    $(".xiangshang").mouseleave(function () {
        $(".xiangshang").css("opacity", "0");
    })
    $(".xiangxia").mouseleave(function () {
        $(".xiangxia").css("opacity", "0");
    })
    $(".pics img").mouseenter(function () {
        var index = $(".pics img").index(this);
        $(".pics img").eq(index).css("opacity", "0.2");
        // $(".pics span").eq(index).css("display", "inline");
        $(".pics span").eq(index).css({
            "opacity": "1",
            "transition": "1.2s"
        });
    })
    $(".pics img").mouseleave(function () {
        var index = $(".pics img").index(this);
        // $(".pics span").css("display", "none");
        $(".pics img").css({
            "opacity": "1",
            "transition": "1.2s"
        });
        $(".pics span").css({
            "opacity": "0",
            "transition": "1.2s"
        });

    })
    $(".up").click(function () {
        num++;
        if (num >= 3) {
            num = 3
        }
        $("#jishu").html(arrSpan[num]);
        $("#tit").html(arrH2[num]);
        $("#sdjs").html(arrP[num]);
        $(".tu2_right").css({
            "background": arrUrl[num],
            "background-size": "100% auto"
        });

    })
    $(".down").click(function () {
        num--;
        if (num <= 0) {
            num = 0
        }
        $("#jishu").html(arrSpan[num]);
        $("#tit").html(arrH2[num]);
        $("#sdjs").html(arrP[num]);
        $(".tu2_right").css({
            "background": arrUrl[num],
            "background-size": "100% auto"
        });

    })
    $("#fasong").click(function () {
        if ($("#username").val() == '') {
            alert('登入后才能发送愿望');

        } else if ($("#yuanwang").val() == '') {
            alert('写点什么吧');
        } else {
            $("#wwish").html($("#wwish").html() + '<li>' + $("#yuanwang").val() + '</li>');

            $("#bb").html($("#bb").html() + '<li>' + '<img src="img/lanl.png">' +
                '<div id="sanjiao"> </div>' + '<div id="wenben">' +
                '<span id="wen">' + $("#yuanwang").val() + '<br><i class="iconfont' +
                ' icon-mofabang " id="mofa">帮TA实现</i><span id="hou">———' + $("#username").val() + '</span></span>' +
                '</div>' + '</li>');
            $("#yuanwang").val('');
        }

    })
    $(".mmofa").click(function () {
        $(this).removeClass("iconfont icon-mofabang").addClass("iconfont icon-dagou");
        $(this).css("color", "#3faf57");
        $(this).text('已实现');
    })
    $("#yuanwang").click(function(){
        $("#yuanwang").css({
            "border-color":"skyblue",
            "box-shadow":"0px 0px 2px 2px skyblue"
        })
    })

    $("#yuanwang").blur(function(){
        $("#yuanwang").css({
            "border-color":"#e74f4d",
            "box-shadow":"0px 0px 0px 0px skyblue"
        })
    })

    $("#username").click(function(){
        $("#username").css({
            "border-color":"skyblue",
            "box-shadow":"0px 0px 2px 2px skyblue"
        })
    })

    $("#username").blur(function(){
        $("#username").css({
            "border-color":"#fff",
            "box-shadow":"0px 0px 0px 0px skyblue",
            "border-bottom":"2px solid #e74f4d"
        })
    })

    $("#password").click(function(){
        $("#password").css({
            "border-color":"skyblue",
            "box-shadow":"0px 0px 2px 2px skyblue"
        })
    })

    $("#password").blur(function(){
        $("#password").css({
            "border-color":"#fff",
            "box-shadow":"0px 0px 0px 0px skyblue",
            "border-bottom":"2px solid #e74f4d"
        })
    })



});