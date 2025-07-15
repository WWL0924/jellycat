// 实现焦点图切换功能
// 焦点图列表
var images = [
	'./images/banner/banner_1.png',
	'./images/banner/banner_2.jpg',
	'./images/banner/banner_3.jpg',
];
// 当前显示的焦点图索引
var currentIndex = 0;
// 左箭头_切换到上一个焦点图
$('.prev').on('click', function() {
	// 切换当前显示的焦点图索引
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	// 根据当前显示的焦点图索引更新焦点图路径
	var imagePath = images[currentIndex];
	// 更新焦点图路径
	$('#imageContainer img').attr('src', imagePath);
});

// 右箭头_切换到下一个焦点图
$('.next').on('click', function() {
	// 切换当前显示的焦点图索引
	currentIndex = (currentIndex + 1) % images.length;
	// 根据当前显示的焦点图索引更新焦点图路径
	var imagePath = images[currentIndex];
	// 更新焦点图路径
	$('#imageContainer img').attr('src', imagePath);
});