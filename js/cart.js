$('#checkAll').on('change', function() {
	$('#checkAll, .goodChecked').prop('checked', $(this).prop('checked'));
});

$('.goodChecked').on('change', function() {
	if ($('.goodChecked:checked').length === $('.goodChecked').length) {
		$('#checkAll').prop('checked', true);
	} else {
		$('#checkAll').prop('checked', false);
	}
});

$('.btn-add').on('click', function() {
	var n = $(this).siblings('.buy-num').val();
	n++;
	$(this).siblings('.buy-num').val(n);

	var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
	var price = (p * n).toFixed(2);
	$(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
	getSum();
});

$('.btn-reduce').on('click', function() {
	var n = $(this).siblings('.buy-num').val();
	if (n == 1) {
		return false;
	}
	n--;
	$(this).siblings('.buy-num').val(n);

	var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
	var price = (p * n).toFixed(2);
	$(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
});

$('.buy-num').on('change', function() {
	var n = $(this).val();
	var p = $(this).parents('.p-num').siblings('.p-price').html();
	p = p.substr(1);
	var price = (p * n).toFixed(2);
	$(this).parents('.p-num').siblings('.p-sum').html('¥' + price);
	getSum();
});

function getSum() {
	var count = 0;
	var item = $('.goodChecked:checked').parents('.cart-item');
	item.find('.buy-num').each(function(i, ele) {
		count += parseInt($(ele).val());
	});
	$('.amount-sum em').text(count);
	var money = 0;
	item.find('.p-sum').each(function(i, ele) {
		money += parseFloat($(ele).text().substr(1));
	});
	$('.price-sum em').text('¥' + money.toFixed(2));
}

getSum();

$('.p-action a').on('click', function() {
	$(this).parents('.cart-item').remove();
	getSum();
});
