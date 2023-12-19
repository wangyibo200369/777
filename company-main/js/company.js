//浏览器加载运行
window.onload = function show() {
    var oUl = document.getElementById("homePage");
    var oLi = oUl.getElementsByTagName("li");
    var oBox = document.getElementsByClassName("li");
    var oA_left = document.getElementsByClassName("a_left");

    oA_left[0].style.display = "block";
    oBox[0].style.display = "block";
    oLi[0].style.background = "#3c6591";
    oLi[0].style.color = "white";
}

//用于控制主页nav的切换
function display(obj) {
    var oUl = document.getElementById("homePage");
    var oLi = oUl.getElementsByTagName("li");
    var oBox = document.getElementsByClassName("li");
    var oQuick = document.getElementsByClassName("quick"); //清空quick显示页面
    var oNews = document.getElementsByClassName("news"); //清空News显示页面
    var oBusinessman = document.getElementsByClassName("businessman");
    var oSolution = document.getElementsByClassName("solution");

    var txt = obj.innerHTML;
    for (i = 0; i < oLi.length; i++) {
        if (oLi[i].innerHTML == txt) {
            oBox[i].style.display = "block"; //显示nav指定切换的页面
            oLi[i].style.background = "#3c6591";
            oLi[i].style.color = "white";
            oLi[i].style.transition = ".5s";
            oBusinessman[1].style.display = "none";

            if (oLi[3].innerHTML == txt) { //显示金融消费页面
                oSolution[1].style.display = "block";
            } else {
                oSolution[1].style.display = "none";
            }
            for (j = 0; j < 3; j++) {
                oQuick[j].style.display = "none";
                oNews[j].style.display = "none";
            }
        } else {
            oBox[i].style.display = "none";
            oLi[i].style.background = "none";
            oLi[i].style.color = "black";
        }
    }

}

//显示快捷支付页面
function showQuick(obj) {
    var oBox = document.getElementsByClassName("li");
    var oQuick = document.getElementsByClassName("quick");
    var oProduct = document.getElementsByClassName("product");
    var oService = oProduct[0].getElementsByClassName("service");
    var oP = oService[0].getElementsByTagName("p");

    var txt = obj.innerHTML;
    for (i = 0; i < oBox.length; i++) { //清空nav所有显示页面
        oBox[i].style.display = "none";

    }
    if (txt == oP[0].innerHTML) {
        oQuick[0].style.display = "block"; //显示0页面
        oQuick[1].style.display = "none";
        oQuick[2].style.display = "none";
    } else if (txt == oP[1].innerHTML) {
        oQuick[1].style.display = "block"; //显示快捷支付页面
        oQuick[0].style.display = "none";
        oQuick[2].style.display = "none";
    } else if (txt == oP[2].innerHTML) {
        oQuick[2].style.display = "block"; //显示2页面
        oQuick[1].style.display = "none";
        oQuick[0].style.display = "none";
    } else {
        oQuick[2].style.display = "none"; //显示2页面
        oQuick[1].style.display = "none";
        oQuick[0].style.display = "none";
    }
}

//显示新闻页面
function showNews(obj) {
    var oBox = document.getElementsByClassName("li");
    var oNewss = document.getElementsByClassName("newss");
    var oP2 = oNewss[0].getElementsByClassName("p2"); //获取点击事件源
    var oNews = document.getElementsByClassName("news"); //显示news
    var oLi0 = oNews[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    var oLi1 = oNews[1].getElementsByTagName("ul")[0].getElementsByTagName("li");
    var oLi2 = oNews[2].getElementsByTagName("ul")[0].getElementsByTagName("li");


    var txt = obj.innerHTML;
    for (i = 0; i < oBox.length; i++) { //清空nav所有显示页面
        oBox[i].style.display = "none";

    }
    if (txt == oP2[0].innerHTML) {
        oNews[0].style.display = "block"; //显示0页面
        oNews[1].style.display = "none";
        oNews[2].style.display = "none";
        oLi0[1].style.color = "orange";
        oLi0[2].style.color = "#333";
        oLi0[3].style.color = "#333";
        oLi1[1].style.color = "orange";
        oLi1[2].style.color = "#333";
        oLi1[3].style.color = "#333";
        oLi2[1].style.color = "orange";
        oLi2[2].style.color = "#333";
        oLi2[3].style.color = "#333";

    } else
    if (txt == oP2[1].innerHTML) {
        oNews[1].style.display = "block"; //显示新闻页面
        oNews[0].style.display = "none";
        oNews[2].style.display = "none";
        oLi0[1].style.color = "#333";
        oLi0[2].style.color = "orange";
        oLi0[3].style.color = "#333";
        oLi1[1].style.color = "#333";
        oLi1[2].style.color = "orange";
        oLi1[3].style.color = "#333";
        oLi2[1].style.color = "#333";
        oLi2[2].style.color = "orange";
        oLi2[3].style.color = "#333";
    } else
    if (txt == oP2[2].innerHTML) {
        oNews[2].style.display = "block"; //显示2页面
        oNews[1].style.display = "none";
        oNews[0].style.display = "none";
        oLi0[1].style.color = "#333";
        oLi0[2].style.color = "#333";
        oLi0[3].style.color = "orange";
        oLi1[1].style.color = "#333";
        oLi1[2].style.color = "#333";
        oLi1[3].style.color = "orange";
        oLi2[1].style.color = "#333";
        oLi2[2].style.color = "#333";
        oLi2[3].style.color = "orange";
    } else {
        oNews[2].style.display = "none"; //显示2页面
        oNews[1].style.display = "none";
        oNews[0].style.display = "none";
        oLi0[1].style.color = "orange";
        oLi0[2].style.color = "#333";
        oLi0[3].style.color = "#333";
        oLi1[1].style.color = "orange";
        oLi1[2].style.color = "#333";
        oLi1[3].style.color = "#333";
        oLi2[1].style.color = "orange";
        oLi2[2].style.color = "#333";
        oLi2[3].style.color = "#333";
    }
}

//实现新闻资讯页的子页切换
function n_right_1(obj) {
    var oNews = document.getElementsByClassName("news");
    var oN_right_1 = document.getElementsByClassName("n_right_1");
    var oLi_0 = oN_right_1[0].getElementsByTagName("li");
    var oLi_1 = oN_right_1[1].getElementsByTagName("li");
    var oLi_2 = oN_right_1[2].getElementsByTagName("li");


    var txt = obj.innerHTML;

    if (oLi_0[1].innerHTML == txt) {
        oNews[0].style.display = "block";
        oLi_0[1].style.color = "orange";
        oNews[1].style.display = "none";
        oLi_0[2].style.color = "#333";
        oNews[2].style.display = "none";
        oLi_0[3].style.color = "#333";

    } else if (oLi_0[2].innerHTML == txt) {
        oNews[0].style.display = "none";
        oLi_0[1].style.color = "#333";
        oNews[1].style.display = "block";
        oLi_0[2].style.color = "orange";
        oNews[2].style.display = "none";
        oLi_0[3].style.color = "#333";

    } else if (oLi_0[3].innerHTML == txt) {
        oNews[0].style.display = "none";
        oLi_0[1].style.color = "#333";
        oNews[1].style.display = "none";
        oLi_0[2].style.color = "#333";
        oNews[2].style.display = "block";
        oLi_0[3].style.color = "orange";

    } else {
        oNews[0].style.display = "none";
        oLi[1].style.color = "#333";
        oNews[1].style.display = "none";
        oLi[2].style.color = "#333";
        oNews[2].style.display = "none";
        oLi[3].style.color = "#333";
    }
    if (oLi_1[1].innerHTML == txt) {
        oNews[0].style.display = "block";
        oLi_1[1].style.color = "orange";
        oNews[1].style.display = "none";
        oLi_1[2].style.color = "#333";
        oNews[2].style.display = "none";
        oLi_1[3].style.color = "#333";

    } else if (oLi_1[2].innerHTML == txt) {
        oNews[0].style.display = "none";
        oLi_1[1].style.color = "#333";
        oNews[1].style.display = "block";
        oLi_1[2].style.color = "orange";
        oNews[2].style.display = "none";
        oLi_1[3].style.color = "#333";

    } else if (oLi_1[3].innerHTML == txt) {
        oNews[0].style.display = "none";
        oLi_1[1].style.color = "#333";
        oNews[1].style.display = "none";
        oLi_1[2].style.color = "#333";
        oNews[2].style.display = "block";
        oLi_1[3].style.color = "orange";

    } else {
        oNews[0].style.display = "none";
        oLi[1].style.color = "#333";
        oNews[1].style.display = "none";
        oLi[2].style.color = "#333";
        oNews[2].style.display = "none";
        oLi[3].style.color = "#333";
    }
    if (oLi_2[1].innerHTML == txt) {
        oNews[0].style.display = "block";
        oLi_2[1].style.color = "orange";
        oNews[1].style.display = "none";
        oLi_2[2].style.color = "#333";
        oNews[2].style.display = "none";
        oLi_2[3].style.color = "#333";

    } else if (oLi_2[2].innerHTML == txt) {
        oNews[0].style.display = "none";
        oLi_2[1].style.color = "#333";
        oNews[1].style.display = "block";
        oLi_2[2].style.color = "orange";
        oNews[2].style.display = "none";
        oLi_2[3].style.color = "#333";

    } else if (oLi_2[3].innerHTML == txt) {
        oNews[0].style.display = "none";
        oLi_2[1].style.color = "#333";
        oNews[1].style.display = "none";
        oLi_2[2].style.color = "#333";
        oNews[2].style.display = "block";
        oLi_2[3].style.color = "orange";

    } else {
        oNews[0].style.display = "none";
        oLi[1].style.color = "#333";
        oNews[1].style.display = "none";
        oLi[2].style.color = "#333";
        oNews[2].style.display = "none";
        oLi[3].style.color = "#333";
    }

}
//用于在关于我们的页面的子页面切换
function about_us(obj) {
    var oA_right = document.getElementsByClassName("a_right");
    var oUl = oA_right[0].getElementsByTagName("ul");
    var oLi = oUl[0].getElementsByTagName("li");
    var oA_left = document.getElementsByClassName("a_left");
    var oUs = document.getElementsByClassName("about_us");

    var oAbout = document.getElementsByClassName("about");
    var oA_left_1 = document.getElementsByClassName("a_left_1");
    var aA_left_2 = document.getElementsByClassName("a_left_2");

    var text = obj.innerHTML;
    for (i = 1; i < oLi.length; i++) {
        if (text == oLi[2].innerHTML) { //判断是不是点击第二个li
            oUs[0].style.height = "1450px";
        } else if (text == oLi[3].innerHTML) { //判断是不是点击第四个li
            oUs[0].style.height = "870px";
            oAbout[0].style.height = "870px";
            oA_left_1[0].style.height = "870px";
            oA_right[0].style.height = "870px";
        } else if (text == oLi[4].innerHTML) { //判断是不是点击第四个li
            oUs[0].style.height = "670px";
            oAbout[0].style.height = "670px";
            oA_left_1[0].style.height = "670px";
            oA_right[0].style.height = "670px";
        } else {
            oUs[0].style.height = "1050px";
            oAbout[0].style.height = "1050px";
            oA_right[0].style.height = "1050px";
        }

        if (text == oLi[i].innerHTML) { //判断是否等于点击文本
            oA_left[i - 1].style.display = "block"; //显示第一个a_left[0]
            oLi[i].style.color = "orange";
        } else {
            oA_left[i - 1].style.display = "none";
            oLi[i].style.color = "#333";
        }

    }

}
//加盟注册
function register(obj) {
    var oBusinessman = document.getElementsByClassName("businessman");
    var oSubmit = document.getElementById("submit");

    var txt = obj.innerHTML;
    if (oSubmit.innerHTML == txt) {
        oBusinessman[1].style.display = "block";
        oBusinessman[0].style.display = "none";
    } else {
        oBusinessman[0].style.display = "block";
        oBusinessman[1].style.display = "none";
    }
}
//banner轮播
// var oBanner = document.getElementsByClassName("banner");
// var oImg = oBanner[0].getElementsByClassName("img"); //装图片的盒子
// var oPreNext = document.getElementsByClassName("preNext");
// var oSpan_1 = oPreNext[0].getElementsByClassName("span_1"); //切换图片的键
// var oSpan_2 = oPreNext[0].getElementsByClassName("span_2");
// var a = document.getElementById("a");
// var b = document.getElementById("b");
// var oDot = document.getElementsByClassName("dot"); //获取点的on
// var oDotSpan = oDot[0].getElementsByTagName("span");
// var time_1 = null;
// var time_2 = null;
// var flag = true;
// var index = 0;

// function moveImg(dis) {
//     var time = 400;
//     var eachTime = 10;
//     var eachDis = dis / (time / eachTime);
//     var newPosition = parseInt(oImg[0].style.left) + dis;
//     flag = false;

//     function eachMove() {
//         if (dis > 0 && parseInt(oImg[0].style.left) < newPosition || dis < 0 && parseInt(oImg[0].style.left) > newPosition) {
//             oImg[0].style.left = parseInt(oImg[0].style.left) + eachDis + 'px';
//         } else {
//             flag = true;
//             clearInterval(time_1);
//             oImg[0].style.left = newPosition + 'px';
//             if (newPosition == 0) {
//                 oImg[0].style.left = -4608 + 'px';
//             }
//             if (newPosition == -6144) {
//                 oImg[0].style.left = -1536 + 'px';
//             }
//         }
//     }
//     time_1 = setInterval(eachMove, 15)
// }
// b.onclick = function() {
//     if (!flag) return;
//     moveImg(-1536); //调用img移动的方法
//     if (index == 3) { //控制点的位置
//         index == 0;
//     } else {
//         index++;
//     }
//     oDotSpanShow(); //显示点的方法
// }
// a.onclick = function() {
//     if (!flag) return;
//     moveImg(1536);
//     if (index == 0) {
//         index == 3
//     } else {
//         index--;
//     }
// }

// function oDotSpanShow() {
//     for (var i = 0; i < oDotSpan.length; i++) {
//         if (oDotSpan[i].className == "on") {
//             oDotSpan[i].className = "";
//             break;
//         }
//     }
//     oDotSpan[0].className = "on";
// }
// time_2 = setInterval(b.onclick, 1500);
// oBanner[0].onmouseover = function() {
//     clearInterval(time_2);
// };
// oBanner[0].onmouseout = function() {
//     time_2 = setInterval(b.onclick, 2000);
// };