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
	//{title:'To Background', hasChild:true, path:'/app/ToBackground'},
	{title:'Graph', hasChild:true, path:'/app/Graph'}
];

// リストを生成
var tableView = Titanium.UI.createTableView({data:data});
firstWin.add(tableView);
	
// create table view event listener
tableView.addEventListener('click', function(e) {
	if (e.rowData.path) {
		var ExampleWindow = require(e.rowData.path),
			exwin = new ExampleWindow({title:e.rowData.title});
		nav.open(exwin, {animated:true});
	}
});
	





/*
// Graph
var GraphRow = Ti.UI.createTableViewRow({
	title:"Graph",
	hasChild:true
});
GraphRow.addEventListener("click", function() {
	//nav.open(Graph(rootWin), {animated:true});
});
tableView.appendRow(GraphRow);

// ToBackground
var ToBackgroundWin = require('app/ToBackGroundWin');
var toBackgroundRow = Ti.UI.createTableViewRow({
	title:"To Background",
	hasChild:true
});
toBackgroundRow.addEventListener("click", function() {
	nav.open(ToBackgroundWin(rootWin), {animated:true});
});
tableView.appendRow(toBackgroundRow);

*/

rootWin.open();

