requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery': '../js/jQuery',
		'pager': '../js/pagination/pagination',
		'template': '../js/template',
		'dataTable': '../js/ui/dataTable',
	}
})

require(['jquery','pager','template','dataTable'], function($) {		
	$(function(){
		//预约管理列表
		$('.market_order').dataTable({
			url: "/creVisit/getSaleVisitListPage",
			param: 'pid=' + $('#pid').val(),
			template: $('#tpl-orderlist').html(),
			listContainer: '.market_order_list', // 列表显示的容器
			pagerContainer: '.market_order_more' // 分页器显示的容器
		});
		
	})
})