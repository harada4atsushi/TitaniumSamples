function Highcharts(nav) {
	
	var win = Titanium.UI.createWindow({  
    	backgroundColor:'#ffffff'
	});
	
	var webView = Ti.UI.createWebView({
		url: '/etc/graph/highcharts/highcharts.html'
	});
	win.add(webView);
	
	return win;
}
module.exports = Highcharts;
