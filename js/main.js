
$(document).ready(function(){
//	 console.log(cell.eq(0).position().left)
//	cell.style.backgroundImage = "url('../img/bg.jpg')";
setTimeout(function(){
	init()
},200)
	
});
function init(){
//	for(var i = 0; i < cell.length; i++) { //还必须判断是不是当前原素本身。将自己排除在外
//			
//	}
	for(var i = 0; i < 20; i++) { //随机打乱
		var a = Math.floor(Math.random() * 9);
		var b = Math.floor(Math.random() * 9);
		console.log(a+','+b)
		if(a != b) {
			random(a, b);
		}
	}
}

function random(a, b) { //随机打乱函数，其中交换部分，可以提取出来封装
	var _left;
	var _top;
	
	_left = $('.grid-cell').eq(a).position().left;
	_top = $('.grid-cell').eq(a).position().top;
	//console.log(_left+','+_top)
	$('.grid-cell').eq(a).css({
		'top':$('.grid-cell').eq(b).position().top+'px',
	 	'left':$('.grid-cell').eq(b).position().left+'px',
	});
	$('.grid-cell').eq(b).css({
		'top':_top+'px',
	 	'left':_left+'px',
	})
	
//	var _index;
//	_index = aEle.getAttribute("data-index");
//	aEle.setAttribute("data-index", bEle.getAttribute("data-index"));
//	bEle.setAttribute("data-index", _index);
}
