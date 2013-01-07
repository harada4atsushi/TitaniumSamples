Titanium.UI.setBackgroundColor('#000000');

var rootWin = Titanium.UI.createWindow({  
    backgroundColor:'#ffffff'
});

// 初期表示画面
var firstWin = Ti.UI.createWindow({
	backgroundColor:'#ffffff',
	title:"Samples"
});

// ナビゲーションオブジェクト
var nav = Ti.UI.iPhone.createNavigationGroup({
    window: firstWin,
	    
});
rootWin.add(nav);

// table data
var data = [
	{title:'To Background Win', hasChild:true, path:'/app/ToBackgroundWin'},
	{title:'Graph', hasChild:true, path:'/app/Graph'}
];

// リストを生成
var tableView = Titanium.UI.createTableView({data:data});
firstWin.add(tableView);
	
// create table view event listener
tableView.addEventListener('click', function(e) {
	if (e.rowData.path) {
		var ExampleWindow = require(e.rowData.path),
			exwin = new ExampleWindow(nav);
		nav.open(exwin, {animated:true});
	}
});

rootWin.open();

