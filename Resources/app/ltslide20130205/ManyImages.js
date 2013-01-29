function ManyImages(nav) {
	
	var win = Titanium.UI.createWindow({  
    	backgroundColor:'#ffffff'
	});
	
	var vBox = Ti.UI.createView({
		layout: "vertical",
		top: 0,
		width: "100%", height: "100%"
	});
	win.add(vBox);
	
	for (var i = 0; i < 21; i++) {
		var hBox = Ti.UI.createView({
			layout: "horizontal",
			top: 0,
			width: "100%", height: 20
		});
		vBox.add(hBox);
	
		for (var j = 0; j < 10; j++) {
			var imgView = Ti.UI.createImageView({
				top: 0, left: 10,
				width: 15, height: 20,
				image: "images/ltslide20130205/many_images/b" + j + ".png"
			});
			hBox.add(imgView);
		}
	}
	
	return win;
}

module.exports = ManyImages;
