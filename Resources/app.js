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

// リストを生成
var tableView = Titanium.UI.createTableView({});
firstWin.add(tableView);

// 遷移先画面
var ToBackgroundWin = require('app/ToBackGroundWin');

// ToBackground
var toBackgroundRow = Ti.UI.createTableViewRow({
	title:"To Background",
	hasChild:true
});
toBackgroundRow.addEventListener("click", function() {
	nav.open(ToBackgroundWin(rootWin), {animated:true});
});
tableView.appendRow(toBackgroundRow);

rootWin.open();

