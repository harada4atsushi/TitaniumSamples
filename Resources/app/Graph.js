function Graph(rootWin) {
	
	var win = Titanium.UI.createWindow({  
    	backgroundColor:'#ffffff'
	});
	
	var webView = Ti.UI.createWebView({
		url: '/etc/graph/flot.html'
	});
	win.add(webView);
	
	return win;
}

module.exports = Graph;
