let time = $(".vip-time").html() * 60
let threshold = 160;
setInterval(() => {
    if(time==0) {
        alert("浏览时间到")
        window.location.href = "/"
    }
    if(time >= 0){
        time--
    }
    $(".vip-time").html(time)
    if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
            // 如果打开控制台，则关闭控制台
            window.close();  
            window.location = "about:blank";  
        }
}, 1000);
if($(".vip-time").html()>0)
{
    $.getJSON('/user/usevip',{id:$("input[name='userId']").val()},function(res){
        if (res.code == 1) {
          console.log('vip文章浏览成功')
          $(".vip-times").html($(".vip-times").html()-1)
        } else {
          console.log('vip文章浏览成功')
        }
    })
}
window.oncontextmenu = function() {
	event.preventDefault(); // 阻止默认事件行为
    return false;
}

window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
	// 判断是否按下F12，F12键码为123
	if (event.keyCode === 123) {
		event.preventDefault(); // 阻止默认事件行为
        window.event.returnValue = false;
    }
    if(event.ctrlKey && event.keycode === 80) {
        event.preventDefault(); // 阻止默认事件行为
        window.event.returnValue = false;
    }
}

function keyDown(e){
	
	var currKey=0, e=e||event||window.event;
	currKey = e.keyCode||e.which||e.charCode;
	if(currKey == 80 && (e.ctrlKey||e.metaKey)){
        window.event.returnValue = false;
        e.preventDefault();
    }
    if(currKey == 85 && (e.ctrlKey||e.metaKey)){
        window.event.returnValue = false;
        e.preventDefault();
    }
    if(currKey == 73 && (e.ctrlKey||e.metaKey)){
        window.event.returnValue = false;
        e.preventDefault();
    }
    if(currKey == 79 && (e.ctrlKey||e.metaKey)){
        window.event.returnValue = false;
        e.preventDefault();
	}
}
document.onkeydown = keyDown;