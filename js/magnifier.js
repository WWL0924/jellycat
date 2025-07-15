// 鼠标指针移入小图时，放大镜遮罩层和大图都显示
$('.small-img').on('mouseover', function() {
toggle('show');
});

// 鼠标指针移出小图时，放大镜遮罩层和大图都隐藏
$('.small-img').on('mouseout', function() {
toggle('hide');
});
// 切换放大镜遮罩层和大图的显示或隐藏
function toggle(type) {
switch (type) {
case 'show':
$('.big-img').show();
$('.focus').show();
break;
case 'hide':
$('.big-img').hide();
$('.focus').hide();
break;
}
}

// 在放大镜遮罩层在小图中移动的时候，获取位置信息。进行大图移动

$('.small-img').on('mousemove', function(e) {
// 放大镜遮罩层移动 —— 根据浏览器在当前视口中的x、y坐标进行定位
focusMove(e.clientX, e.clientY);
// 大图移动
bigImgMove();
});

var preview_offset = $('.preview').offset();
var focus_size = {
width: $('.focus').width(),
height: $('.focus').height(),
};

// 计算移动的比例，按比例去计算大图移动的比例
var prop_left;
var prop_top;

function focusMove(x, y) {
// 鼠标指针位置传过来之后，让放大镜遮罩层进行定位。

// 放大镜遮罩层距左侧的距离=视口的x坐标-容器距离左侧的偏移距离
// 想让鼠标指针在放大镜遮罩层的正中心，放大镜遮罩层距左侧的距离=视口的x坐标-容器距离左侧的偏移距离-放大镜遮罩层  1/2的宽度
var _left = x - focus_size.width / 2 - preview_offset.left;

var _top = y - focus_size.height / 2 - preview_offset.top;

// 边界检测
// 例如，放大镜遮罩层距左侧的距离不能小于最小值0，若小于最小值，则变为最小值 ，不能大于最大值（小图容器的宽度），如果大于最大值，则变为最大值
// 最大值的计算方式：放大镜遮罩层的宽度200, 小图的宽度是400，可以移动的最大宽度为200，最大高度为200
_left = _left < 0 ? 0 : _left;
_left = _left > 200 ? 200 : _left;
_top = _top < 0 ? 0 : _top;
_top = _top > 200 ? 200 : _top;

// 设置放大镜遮罩层的位置
$('.focus').css({
left: _left,
top: _top,
});
// 计算比例 左侧移动的位置/总的可以移动的px
prop_left = _left / 200;
prop_top = _top / 200;
}

function bigImgMove() {
// 焦点和背景是同时在动，所以加一个负号，一个向上移动一个向下移动
$('.big-img img').css({
left: -prop_left * 400,
top: -prop_top * 400,
});
}

// 移入图片列表中的某一张图片时，切换小图的路径和大图的图片路径
$('.photo1').on('click', function() {
$('.small-img img').attr('src', './images/detail/vue1.png');
$('.big-img img').attr('src', './images/detail/vue1_big.jpg');
});
$('.photo2').on('click', function() {
$('.small-img img').attr('src', './images/detail/vue2.png');
$('.big-img img').attr('src', './images/detail/vue2_big.jpg');
});
