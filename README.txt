# pagelist-dataTable
使用art-templete.js和pagination.js封装的dataTable.js对后端给的数据进行列表处理并进行分页处理,高效处理列表分页问题

使用方法：

html:
<div class="part market_order">
	<ul class="market_order_list clearfix" id="marketorder"><!--列表数据容器-->
	</ul>
	<div class="market_order_more"></div><!--分页显示容器-_>
</div>
<script type="text/html" id="tpl-orderlist">	<!--预约列表模板  注意 type="text/html"-->
	{{each list item i}}
		<li id="{{item.intent_id}}">
			<div class="client_name" id="{{item.customer_id}}">{{item.full_name}}</div>
			<div>{{item.phone}}</div>
			<div>{{item.order_time}}</div>
			<div>{{item.order_floor}} {{item.order_shop}}</div>
			<div>{{item.realName}}</div>
			<div>{{item.visit_time}}</div>
			<div class="order_charge">
				<span class="tocounselor">分配置业顾问</span>
				{{if item.is_visited != 1}}<span class="tovisit" data-v="{{item.is_visited}}">确认到访</span>{{/if}}
			</div>
		</li>
	{{/each}}
</script>
    
 js
 $('.market_order').dataTable({
	url: "/creVisit/getSaleVisitListPage",//数据url
	param: 'pid=' + $('#pid').val(),//列表传参
	template: $('#tpl-orderlist').html(),//模板内容
	listContainer: '.market_order_list', // 列表显示的容器
	pagerContainer: '.market_order_more' // 分页器显示的容器
 });
    
    
    如果列表要求加入查询搜索功能，则在js里面参数加上form,param参数去除
    $('.market_order').dataTable({
      form:'.form',//查询传条件查询的表单
      url: "/creVisit/getSaleVisitListPage",//数据url
      template: $('#tpl-orderlist').html(),//模板内容
      listContainer: '.market_order_list', // 列表显示的容器
      pagerContainer: '.market_order_more' // 分页器显示的容器
    });
    
    html：
    <form class="cusResform">
	<input type="hidden" name="currentPage" /><!--必填字段-->
	<span><label>手机号码：</label><input type="text" name="phone" class="sphone"/></span>
	<span><label>意向面积：</label><input type="text" name="minNeedArea"/>至<input type="text" name="maxNeedArea">㎡</span>
	<span><label>意向总价：</label><input type="text" name="minNeedPrice"/>至<input type="text" name="maxNeedPrice">万元</span>
	<span><label>购买目的：</label>
	      <select class="buyPurpose" name="buyingObjective">
			<option value=""></option>
			<option value="1">投资</option>
			<option value="2">自营</option>
			<option value="3">投资/自营</option>
	      </select>
	</span>
	<input type="submit" value="搜索" class="searbtn" />
    </form>
    
