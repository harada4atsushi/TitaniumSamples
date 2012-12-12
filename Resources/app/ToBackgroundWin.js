function ToBackgrounWin(rootWin) {
	var win = Titanium.UI.createWindow({  
    	backgroundColor:'#ffffff'
	});
	
	var button1 = Ti.UI.createButton({
		title:"onPause",
		width:100, height:50	
	});
	button1.addEventListener("click", function() {
		// pause時に画面を非表示にすると
		// バックグラウンドに移行する前に実行されてしまうケースがある
		// 例えば、ホームキー2回押しや、ローカル通知時。
		// その場合はresume時にvisible=trueにしても
		// 一度ホーム画面を経由しないと戻ってこない
		Ti.App.addEventListener("pause", function() {
			rootWin.visible = false;
		});
		Ti.App.addEventListener("resume", function() {
			rootWin.visible = true;
		});
	});
	
	win.add(button1);
	return win;
}

module.exports = ToBackgrounWin;
