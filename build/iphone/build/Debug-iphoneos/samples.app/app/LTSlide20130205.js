function LTSlide20130205(nav) {
	var win = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:"LTSlide20130205"
	});

	// table data
	var data = [
		{title:'Many Images', hasChild:true, path:'/app/ltslide20130205/ManyImages'},
		{title:'High Capacity Images', hasChild:true, path:'/app/ltslide20130205/HighCapacityImages'}
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

module.exports = LTSlide20130205;
