require(["config"], function () {
    require(["mui"], function (mui) {
        mui.init();

        function init() {
			find()
        }
		function find() {
			mui.ajax('/api/find', {
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				success: function (data) {
					var str = '';
					data.data.forEach(function (item) {
						str +=
							`<li>
                    <div class="box">${item.tite}<p>${item.miao}</p><h6>还有4天5小时</h6>
                    </div>
                    <div class="img"><img src="${item.img}"></div>
                </li>`
					})
					document.querySelector(".list").innerHTML = str;
					mui('.mui-scroll-wrapper').scroll({
						deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
					});
				},
			});
		}
        init()
    })
})