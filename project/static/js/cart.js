$(function () {
    $('.daohang').remove();
    $('.hengxian').remove();
    // 封装IE的getElementsByClassName兼容性
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {
                if (els[i].className === cls ||
                    els[i].className.indexOf(cls + ' ') >= 0 ||
                    els[i].className.indexOf(' ' + cls + ' ') >= 0 ||
                    els[i].className.indexOf(' ' + cls) >= 0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var cartTable = document.getElementById('cartTable');
    var tr = cartTable.children[1].rows;
    var checkInputs = document.getElementsByClassName('check');
    var checkAllInputs = document.getElementsByClassName('check-all');
    var priceTotal = document.getElementById('priceTotal');
    var foot = document.getElementById('foot');
    var deleteAll = document.getElementById('deleteAll');
    var empty = document.getElementById('empty');
    //计算
    function getTotal() {
        var seleted = 0;
        var price = 0;
        var TotalPrice = 0;
        var yunfei = document.getElementById('yunfei').innerHTML;
        for (var i = 0, len = tr.length; i < len; i++) {
            if (tr[i].getElementsByTagName('input')[0].checked) {
                tr[i].className = 'on';
                seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
                price += parseFloat(tr[i].cells[6].innerHTML);
                TotalPrice = price + parseInt(yunfei);
                document.getElementById('lastPrice').innerHTML = TotalPrice;
                document.getElementById('pricetotal').innerHTML = price;
            } else {
                tr[i].className = '';
            }
        }
        //取两位小数
        priceTotal.innerHTML = price.toFixed(2);
        if (seleted == 0) {
            foot.className = 'foot';
        }
    }

    //小计
    function getSubTotal(tr) {
        var tds = tr.cells;
        var price = parseFloat(tds[4].innerHTML);
        var count = parseInt(tr.getElementsByTagName('input')[1].value);
        var SubTotal = parseFloat(price * count);
        tds[6].innerHTML = changeTwoDecimal_f(SubTotal.toFixed(4));
    }
    for (var i = 0, len = checkInputs.length; i < len; i++) {
        checkInputs[i].onclick = function () {
            if (this.className === 'check-all check') {
                for (var j = 0; j < checkInputs.length; j++) {
                    checkInputs[j].checked = this.checked;
                }
            }
            if (this.checked == false) {
                for (var k = 0; k < checkAllInputs.length; k++) {
                    checkAllInputs[k].checked = false;
                }
            }
            getTotal();
        }
    }
    for (var i = 0; i < tr.length; i++) {
        tr[i].onclick = function (e) {
            e = e || window.event;
            var el = e.srcElement;
            var cls = el.className;
            var input = this.getElementsByTagName('input')[1];
            var val = parseInt(input.value);
            var reduce = this.getElementsByTagName('span')[1];
            //匹配点击的按钮事件
            switch (cls) {
                case 'add fl':
                    input.value = val + 1;
                    reduce.innerHTML = '-';
                    getSubTotal(this);
                    break;
                case 'reduce fl':
                    if (val > 1) {
                        input.value = val - 1;
                    }
                    if (input.value <= 1) {
                        getSubTotal(this);
                        getTotal();
                        return false;

                    }
                    getSubTotal(this);
                    break;
                case 'delete':
                    var conf = confirm('确定要删除吗？');
                    if (conf) {
                        this.parentNode.removeChild(this);
                    }
                    break
                default:
                    break;
            }
            getTotal();
        }
        tr[i].getElementsByTagName('input')[1].onkeyup = function () {
            var val = parseInt(this.value);
            var tr = this.parentNode.parentNode
            var reduce = tr.getElementsByTagName('span')[1];
            if (isNaN(val) || val < 1) {
                val = 1;
            }
            this.value = val;
            if (val <= 1) {
                reduce.innerHTML = '';
            } else {
                reduce.innerHTML = '-';
            }
            getSubTotal(tr);
            getTotal();
        }
    }
    empty.onclick = function () {
        var conf = confirm('确定清空购物车吗？');
        if (conf) {
            var element = document.getElementsByTagName("tbody")[0];
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            $('tbody').remove();
            $('.dianpu').remove();
            $('.mycart').addClass('hide');
            $('#cartTable').addClass('hide');
            $('.totalPrice').addClass('hide');
            $('.foot').addClass('hide');
            $('.goShoping').removeClass('hide');
        }

    }
    deleteAll.onclick = function () {
        var inputs = document.getElementsByName("check");
        var checked_counts = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                checked_counts++;
            }
        }
        if (checked_counts != '0') {
            var conf = confirm('确定删除吗？');
            if (conf) {
                for (var i = 0; i < tr.length; i++) {
                    var input = tr[i].getElementsByTagName('input')[0];
                    if (input.checked) {
                        tr[i].parentNode.removeChild(tr[i]);
                        i--;
                        if (tr.length == 0) {
                            console.log(i)
                            $('.dianpu').remove()
                        }
                    }
                }
            }
        }

    }
    checkAllInputs[0].checked = true;
    checkAllInputs[0].onclick();
    /**
     * 保留两位小数
     * @param {*} x 
     */
    function changeTwoDecimal_f(x) {
        var f_x = parseFloat(x);
        if (isNaN(f_x)) {
            alert('function:changeTwoDecimal->parameter error');
            return false;
        }
        var f_x = Math.round(x * 100) / 100;
        var s_x = f_x.toString();
        var pos_decimal = s_x.indexOf('.');
        if (pos_decimal < 0) {
            pos_decimal = s_x.length;
            s_x += '.';
        }
        while (s_x.length <= pos_decimal + 2) {
            s_x += '0';
        }
        return s_x;
    }
})