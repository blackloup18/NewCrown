var ApiUrl = "http://121.36.217.183:1001/";
var TestUrl = "http://localhost:64314/";
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
function stringToDate(str) {
    var tempStrs = str.split(" ");
    var dateStrs = tempStrs[0].split("-");
    var year = parseInt(dateStrs[0], 10);
    var month = parseInt(dateStrs[1], 10) - 1;
    var day = parseInt(dateStrs[2], 10);
    var timeStrs = tempStrs[1].split(":");
    var hour = parseInt(timeStrs[0], 10);
    var minute = parseInt(timeStrs[1], 10);
    var second = parseInt(timeStrs[2], 10);
    var date = new Date(year, month, day, hour, minute, second);
    return date;
}
$.request = function (name) {
    var search = location.search.slice(1);
    var arr = search.split("&");
    for (var i = 0; i < arr.length; i++) {
        var ar = arr[i].split("=");
        if (ar[0] == name) {
            if (unescape(ar[1]) == 'undefined') {
                return "";
            } else {
                return unescape(ar[1]);
            }
        }
    }
    return "";
};

function verifyName(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        layer.closeAll()
        layer.open({
            content: '姓名不能为空！'
            , btn: '我知道了'
        });
        return false;
    }
    var reg = /^[\u4E00-\u9FFF]+$/;
    if (!reg.test(obj)) {
        layer.closeAll()
        layer.open({
            content: '请输入中文姓名！'
            , btn: '我知道了'
        });
        return false;
    }
    return true;
}
function verifyPhone(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        layer.closeAll()
        layer.open({
            content: '联系方式不能为空！'
            , btn: '我知道了'
        });
        return false;
    }
    var reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    if (!reg.test(obj)) {
        layer.closeAll()
        layer.open({
            content: '请输入正确的联系手机！'
            , btn: '我知道了'
        });
        return false;
    }
    return true;
}
function verifyCard(obj) {
    if (!(typeof obj == "undefined" || obj == null || obj == "")) {
        var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
        if (!reg.test(obj)) {
            layer.closeAll()
            layer.open({
                content: '请输入正确的身份证号！'
                , btn: '我知道了'
            });
            return false;
        }
    }
    return true;
}
function verifyTemp(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        layer.closeAll()
        layer.open({
            content: '测量体温不能为空！'
            , btn: '我知道了'
        });
        return false;
    }
    var temp = parseFloat(obj);
    if (temp.toString() == "NaN") {
        layer.closeAll()
        layer.open({
            content: '请输入正确的体温！'
            , btn: '我知道了'
        });
        return false;
    }
    if (temp > 37.2 || temp <= 35.5) {
        layer.closeAll()
        layer.open({
            content: '您体温异常！系统不允许录入！'
            , btn: '我知道了'
        });
        return false;
    }
    return true;
}
function verifyDatetime(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        layer.closeAll()
        layer.open({
            content: '日期不能为空！'
            , btn: '我知道了'
        });
        return false;
    }
    return true;
}
