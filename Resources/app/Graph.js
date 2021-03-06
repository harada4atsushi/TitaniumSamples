function Graph(nav) {
	var win = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:"Graph"
	});

	// table data
	var data = [
		{title:'flot.js', hasChild:true, path:'/app/graph/Flot'},
		{title:'highcharts.js', hasChild:true, path:'/app/graph/Highcharts'}
	];

	// リストを生成
	var tableView = Titanium.UI.createTableView({data:data});
	win.add(tableView);
	
	// create table view event listener
	tableView.addEventListener('click', function(e) {
		if (e.rowData.path) {
			var ExampleWindow = require(e.rowData.path),
				exwin = new ExampleWindow(nav);
			nav.open(exwin, {animated:true});
		}
	});

	return win;
}

module.exports = Graph;
